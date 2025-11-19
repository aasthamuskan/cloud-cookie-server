FROM node:18-slim

WORKDIR /app

COPY app/ ./app
COPY app/server.js ./

EXPOSE 8080

CMD ["node", "server.js"]
