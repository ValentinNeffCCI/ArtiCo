const { PrismaClient } = require("../prisma/generated/client/client.js");
const { PrismaPg } = require('@prisma/adapter-pg');
const { configDotenv } = require("dotenv");

configDotenv();

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
const client = new PrismaClient({ adapter });

module.exports = client;