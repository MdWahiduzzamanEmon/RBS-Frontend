# Base on offical Node.js Alpine image
FROM node

# Set working directory
WORKDIR /usr/app

COPY package.json  ./
RUN npm i

COPY . .

# Build app
#RUN #npm run build

EXPOSE 3000

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Run npm start script when container starts
CMD [ "npm", "start" ]
