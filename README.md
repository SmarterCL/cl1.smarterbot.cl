# CL1 Node - SmarterOS

> Nodo de computación AI para SmarterBot Chile

## Arquitectura

```
                        INTERNET
                           │
                    DNS smarterbot.cl
                           │
                        CADDY
              (reverse proxy + SSL)
                           │
                      DOCKPLOY
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
      CL1              MCP CORE            OLLAMA
   cl1-node          mcp-core           ollama-local
        │                  │                  │
        └──────────────────┼──────────────────┘
                           │
                      SUPABASE VAULT
                      (secrets)
```

## Dominios

| Servicio | Dominio | Puerto |
|----------|---------|--------|
| CL1 Node | cl1.smarterbot.cl | 3000 |
| MCP Core | mcp.smarterbot.cl | 8080 |
| n8n | n8n.smarterbot.cl | 5678 |
| Ollama | ollama.smarterbot.cl | 11434 |

## Servicios

### CL1 Node
Núcleo de procesamiento AI. Gestiona la lógica de negocio y comunicación con otros servicios.

### MCP Core
Model Context Protocol. Kernel de herramientas para acceso a datos externos (Kaggle, APIs, etc.)

### Redis
Cache y colas de mensajes para procesamiento asíncrono.

### n8n
Automatzación de workflows. Conecta servicios y automatiza tareas.

### Ollama
Inference local (opcional). Modelos de lenguaje locales para procesamiento pesado.

##快速开始

### Prerequisites

- Docker + Docker Compose
- Acceso a Supabase Vault
- Dominios configurados en DNS

### Setup

1. **Clonar repositorio**
```bash
git clone https://github.com/SmarterCL/cl1.smarterbot.cl.git
cd cl1.smarterbot.cl
```

2. **Configurar variables de entorno**
```bash
cp env/.env.example env/.env
# Editar .env con valores de Supabase Vault
```

3. **Iniciar servicios**
```bash
docker compose up -d
```

4. **Verificar estado**
```bash
docker compose ps
curl https://cl1.smarterbot.cl/health
```

## Deployment

### Dockploy Pipeline

1. **Push a GitHub** → Trigger webhook en VPS
2. **Dockploy** ejecuta pull + build
3. **Secrets** inyectados desde Supabase Vault
4. **Caddy** provee SSL automáticamente

### Comandos útiles

```bash
# Iniciar servicios
docker compose up -d

# Ver logs
docker compose logs -f cl1-node

# Reiniciar servicio específico
docker compose restart cl1-node

# Actualizar código
git pull origin main
docker compose up -d --build
```

## Estructura del Proyecto

```
cl1.smarterbot.cl/
├── docker-compose.yml    # Orquestación de servicios
├── Caddyfile            # Reverse proxy
├── env/
│   └── .env.example     # Template de variables
├── cl1-node/
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│       ├── index.js
│       └── config.js
└── README.md
```

## Environment Variables

| Variable | Descripción |
|----------|-------------|
| `SUPABASE_URL` | URL del proyecto Supabase |
| `SUPABASE_SERVICE_KEY` | Clave de servicio para Vault |
| `MCP_API_KEY` | API key para MCP |
| `N8N_ENCRYPTION_KEY` | Clave de encriptación n8n |

## API Endpoints

### CL1 Node
- `GET /health` - Health check
- `POST /webhook` - Receptor de webhooks
- `GET /status` - Estado del nodo

### MCP Core
- `POST /query` - Consultas al kernel
- `GET /tools` - Lista de herramientas disponibles

## Desarrollo

### Ambiente local

```bash
# Con Docker
docker compose up -d

# Sin Docker (desarrollo)
cd cl1-node
npm install
npm run dev
```

### Agregar nueva herramienta MCP

1. Crear tool en `mcp-core/tools/`
2. Registrar en `mcp-core/registry.json`
3. Reconstruir imagen: `docker compose build mcp-core`

## Recursos

- [Documentación Dockploy](https://dockploy.io)
- [Guías Caddy](https://caddyserver.com/docs)
- [n8n Workflows](https://docs.n8n.io)

## Licencia

MIT © SmarterBot Chile
