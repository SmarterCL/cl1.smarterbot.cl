# =============================================================================
# CL1 Node Dockerfile
# =============================================================================
FROM node:18-alpine

LABEL maintainer="SmarterBot Chile"
LABEL description="CL1 Node - SmarterOS Core Controller"

# -----------------------------------------------------------------------------
# Construcción multi-stage para producción
# -----------------------------------------------------------------------------
WORKDIR /app

# Copiar archivos de package
COPY package*.json ./

# Instalar dependencias
RUN npm ci --only=production

# Copiar código fuente
COPY . .

# Puerto de exposición
EXPOSE 3000

# Salud del contenedor
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD wget --spider -q http://localhost:3000/health || exit 1

# Iniciar aplicación
CMD ["node", "src/index.js"]
