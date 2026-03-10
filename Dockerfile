# Image
FROM node:22-alpine AS build

# Working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# dependencies installation
RUN npm install --production

# copy all the project file
COPY . .

# Stage 2: Production stage
FROM node:22-alpine

WORKDIR /app

# Copy node modules and app from build stage
COPY --from=build /app .

# Expose the port your app runs on
EXPOSE 3010

# Start the app
CMD ["node", "server.js"]
