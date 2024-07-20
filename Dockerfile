# Use the official Node.js image as the base image
FROM node:20

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the app source code
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Run the app
CMD ["node", "server.js"]
