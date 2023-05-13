# Base image
FROM node:16-alpine3.17

# Set working directory
WORKDIR ./qrpay-fe

# Copy the rest of the app's code to the working directory
COPY . .

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

ENV HTTPS=true
ENV SSL_CRT_FILE=.cert/client.cer
ENV SSL_KEY_FILE=.cert/client.key
ENV PORT=80

EXPOSE 80

# Set the command to start the app
CMD ["npm", "start"]
