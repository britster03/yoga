# Stage 1: Build the application
FROM node:20 AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json .

# Install dependencies
RUN npm install --force

# Copy the rest of the application code
COPY . .


# Command to run your application
CMD ["npm", "start"]
