FROM node:25-alpine
WORKDIR /app

COPY ./API/package*.json ./
RUN npm ci

COPY ./docker/backend/dev.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
