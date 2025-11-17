# Build stage: Install all dependencies and build the app
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install all dependencies (including dev deps for building)
RUN npm ci --silent && npm cache clean --force

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage: Create a minimal runtime image
FROM node:20-alpine AS production

# Set NODE_ENV to production
ENV NODE_ENV=production
ENV PORT=8000

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies and clean cache
RUN npm ci --omit=dev --silent && npm cache clean --force

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Expose port (matches your app's default)
EXPOSE 8000

# Health check (optional, for container monitoring)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node --version || exit 1

# Start the application
CMD ["npm", "run", "start:prod"]