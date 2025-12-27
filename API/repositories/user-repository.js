const prisma = require("../utils/client.js");

module.exports = {
    findAll: async () => {
        return await prisma.user.findMany();
    },
    findAllWithAccess: async () => {
        return await prisma.user.findMany();
    },
    findById: async (id) => {
        return await prisma.user.findUnique({
            where: { id },
            include: {
                entreprises: true
            }
        });
    },
    create: async (email, password, name, admin = false) => {
        return await prisma.user.create({
            data: { email, password, name, role: admin ? "ADMIN" : "USER" }
        });
    },
    findByEmail: async (email) => {
        return await prisma.user.findUnique({
            where: { email: email }
        });
    },
    findByName: async (name) => {
        return await prisma.user.findUnique({
            where: { name: name }
        });
    },
    update: async (id, data) => {
        return await prisma.user.update({
            where: { id },
            data: data
        });
    },
    delete: async (id) => {
        return await prisma.user.delete({
            where: { id }
        });
    },
}