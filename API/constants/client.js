const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require('@prisma/adapter-pg');
const { configDotenv } = require("dotenv");

configDotenv();

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
const client = new PrismaClient({ adapter });

module.exports = client;