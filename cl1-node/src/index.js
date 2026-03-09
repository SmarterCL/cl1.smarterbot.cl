/**
 * CL1 Node - SmarterOS Core Controller
 * 
 * Punto de entrada principal del nodo CL1
 * Gestiona la comunicación con Redis, MCP y Ollama
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const Redis = require('ioredis');
const axios = require('axios');

const config = require('./config');

// Inicializar Express
const app = express();
const PORT = process.env.PORT || 3000;

// =============================================================================
// Middleware
// =============================================================================
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =============================================================================
// Redis Client
// =============================================================================
const redis = new Redis({
    host: process.env.REDIS_HOST || 'redis',
    port: 6379,
    password: process.env.REDIS_PASSWORD,
    retryStrategy: (times) => {
        const delay = Math.min(times * 50, 2000);
        return delay;
    }
});

redis.on('connect', () => {
    console.log('✅ Redis connected');
});

redis.on('error', (err) => {
    console.error('❌ Redis error:', err.message);
});

// =============================================================================
// Health Check
// =============================================================================
app.get('/health', async (req, res) => {
    try {
        await redis.ping();
        res.json({
            status: 'ok',
            service: 'cl1-node',
            version: '1.0.0',
            redis: 'connected',
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            redis: 'disconnected',
            error: error.message
        });
    }
});

// =============================================================================
// Status Endpoint
// =============================================================================
app.get('/status', async (req, res) => {
    try {
        const info = await redis.info();
        const keys = await redis.dbsize();
        
        res.json({
            node: 'cl1',
            environment: process.env.NODE_ENV,
            redis: {
                keys: keys,
                status: 'healthy'
            },
            uptime: process.uptime(),
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// =============================================================================
// Webhook Receptor
// =============================================================================
app.post('/webhook', async (req, res) => {
    try {
        const data = req.body;
        console.log('📥 Webhook received:', data);
        
        // Push a cola de Redis para procesamiento
        await redis.lpush('cl1_tasks', JSON.stringify({
            payload: data,
            timestamp: new Date().toISOString(),
            source: 'webhook'
        }));
        
        res.json({ received: true, taskId: Date.now() });
    } catch (error) {
        console.error('Webhook error:', error);
        res.status(500).json({ error: error.message });
    }
});

// =============================================================================
// Procesamiento Hybrid: Ollama + MCP
// =============================================================================
app.post('/process', async (req, res) => {
    try {
        const { prompt, mode = 'standard' } = req.body;
        
        if (!prompt) {
            return res.status(400).json({ error: 'Prompt requerido' });
        }
        
        console.log(`🧠 Procesando: ${prompt.substring(0, 50)}...`);
        
        let result = {
            prompt,
            mode,
            timestamp: new Date().toISOString()
        };
        
        // =====================================================================
        // Modo standard: Solo lógica
        // =====================================================================
        if (mode === 'standard') {
            // Guardar en Redis para procesamiento asíncrono
            await redis.lpush('mcp_tasks', JSON.stringify({
                type: 'process',
                prompt,
                timestamp: new Date().toISOString()
            }));
            
            result.status = 'queued';
            result.message = 'Tarea encolada para procesamiento';
        }
        
        // =====================================================================
        // Modo hybrid: Ollama + PicoClaw
        // =====================================================================
        else if (mode === 'hybrid') {
            try {
                // 1. Ollama procesa lógica
                const ollamaUrl = process.env.OLLAMA_HOST || 'http://ollama:11434';
                const ollamaModel = process.env.OLLAMA_MODEL || 'codellama:7b';
                
                const ollamaResp = await axios.post(`${ollamaUrl}/api/generate`, {
                    model: ollamaModel,
                    prompt: `Optimiza para SmarterOS: ${prompt}`,
                    stream: false
                }, { timeout: 60000 });
                
                result.logic = ollamaResp.data.response;
                
                // 2. PicoClaw traduce a pulsos biológicos (si está disponible)
                const picoclawUrl = process.env.PICOCLAW_URL || 'http://localhost:3100';
                
                try {
                    const bioResp = await axios.post(`${picoclawUrl}/stimulate`, {
                        instruction: result.logic,
                        node: process.env.PICOCLAW_NODE || 'cl1.smarterbot.cl'
                    }, { timeout: 10000 });
                    
                    result.bio_feedback = bioResp.data;
                    result.status = 'hybrid_complete';
                } catch (picoclawError) {
                    console.log('⚠️ PicoClaw no disponible:', picoclawError.message);
                    result.bio_feedback = { error: 'PicoClaw no conectado' };
                    result.status = 'ollama_only';
                }
                
            } catch (ollamaError) {
                console.error('Ollama error:', ollamaError.message);
                result.error = ollamaError.message;
                result.status = 'error';
            }
        }
        
        res.json(result);
        
    } catch (error) {
        console.error('Process error:', error);
        res.status(500).json({ error: error.message });
    }
});

// =============================================================================
// Consultas a MCP Core
// =============================================================================
app.post('/mcp/query', async (req, res) => {
    try {
        const { query, tool } = req.body;
        
        if (!query) {
            return res.status(400).json({ error: 'Query requerido' });
        }
        
        const mcpUrl = process.env.MCP_URL || 'http://mcp-core:8080';
        
        const response = await axios.post(`${mcpUrl}/query`, {
            query,
            tool: tool || 'default',
            node: 'cl1'
        }, { timeout: 30000 });
        
        res.json(response.data);
        
    } catch (error) {
        console.error('MCP query error:', error.message);
        res.status(500).json({ 
            error: 'MCP no disponible',
            details: error.message 
        });
    }
});

// =============================================================================
// Cola de tareas
// =============================================================================
app.get('/queue', async (req, res) => {
    try {
        const tasks = await redis.lrange('cl1_tasks', 0, 9);
        const parsed = tasks.map(t => JSON.parse(t));
        
        res.json({
            count: tasks.length,
            tasks: parsed
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// =============================================================================
// 404 Handler
// =============================================================================
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint no encontrado' });
});

// =============================================================================
// Error Handler
// =============================================================================
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ error: err.message });
});

// =============================================================================
// Iniciar servidor
// =============================================================================
app.listen(PORT, '0.0.0.0', () => {
    console.log(`
╔═══════════════════════════════════════════╗
║   🧠 CL1 Node - SmarterOS                ║
║   Puerto: ${PORT}                          ║
║   Entorno: ${process.env.NODE_ENV}              ║
╚═══════════════════════════════════════════╝
    `);
});

module.exports = app;
