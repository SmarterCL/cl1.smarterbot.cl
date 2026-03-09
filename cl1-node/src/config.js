/**
 * CL1 Node - Configuración
 */

module.exports = {
    // Puerto del servidor
    port: process.env.PORT || 3000,
    
    // Ambiente
    environment: process.env.NODE_ENV || 'development',
    
    // Timezone
    timezone: process.env.TZ || 'America/Santiago',
    
    // Redis
    redis: {
        host: process.env.REDIS_HOST || 'redis',
        port: parseInt(process.env.REDIS_PORT) || 6379,
        password: process.env.REDIS_PASSWORD,
        db: parseInt(process.env.REDIS_DB) || 0
    },
    
    // URLs de servicios
    services: {
        mcp: process.env.MCP_URL || 'http://mcp-core:8080',
        ollama: process.env.OLLAMA_HOST || 'http://ollama:11434',
        picoclaw: process.env.PICOCLAW_URL || 'http://localhost:3100',
        n8n: process.env.N8N_URL || 'http://n8n:5678'
    },
    
    // Modelos
    models: {
        ollama: process.env.OLLAMA_MODEL || 'codellama:7b',
        picoclaw: process.env.PICOCLAW_NODE || 'cl1.smarterbot.cl'
    },
    
    // Configuración de logging
    logging: {
        level: process.env.LOG_LEVEL || 'info'
    },
    
    // Timeouts (ms)
    timeouts: {
        ollama: 60000,
        mcp: 30000,
        picoclaw: 10000
    }
};
