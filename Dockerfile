# Stage 1: Install dependencies and build
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Next.js application
RUN npm run build

# Install Storybook dependencies
RUN npm install --only=dev
RUN npm run build-storybook

# Stage 2: Create the production image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy build output from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/storybook-static ./storybook-static

# Expose the Next.js port and Storybook port
EXPOSE 3000
EXPOSE 6006

# Start the application
CMD ["npm", "run", "start"]
