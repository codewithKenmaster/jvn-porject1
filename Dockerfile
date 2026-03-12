# Stage 1: Build
FROM node:22-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json first for caching
COPY package*.json ./

# Install dependencies 
RUN npm ci

# check that express exists (for main branch)
RUN node -e "import('express').then(()=>console.log('Express OK')).catch(err=>{console.error(err); process.exit(1)})"

# Copy all project files
COPY . .

# Stage 2: Production
FROM node:22-alpine

WORKDIR /app

# Copy app and node_modules from build stage
COPY --from=build /app .

# Expose the app port
EXPOSE 3010

# Start the server
CMD ["node", "server.js"]