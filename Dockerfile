FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
