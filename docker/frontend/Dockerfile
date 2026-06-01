FROM node:25-alpine

WORKDIR /app

COPY ./Frontend/package*.json ./

RUN npm ci

COPY ./Frontend .

EXPOSE 5173

CMD ["npm", "run", "dev"]
