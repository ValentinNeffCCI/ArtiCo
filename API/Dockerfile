FROM node:25-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm ci

FROM node:25-alpine
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

EXPOSE 3000
CMD ["node", "index.js"]
