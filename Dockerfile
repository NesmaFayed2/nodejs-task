FROM node:14-alpine
WORKDIR /app
COPY n1.js package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

