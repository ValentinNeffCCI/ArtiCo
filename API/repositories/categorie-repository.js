const prisma = require("../utils/client.js")

module.exports = {
    findAll: async (limit=false) => {
        if (limit) {
            return await prisma.categorie.findMany({
                take: limit,
                orderBy: {
                    id: "desc"
                }
            });
        }
        return await prisma.categorie.findMany();
    },
    findById: async (id) => {
        return await prisma.categorie.findUnique({
            where: { id },
            include: {
                entreprises: true
            }
        });
    },
    create: async (data) => {
        return await prisma.categorie.create({
            data: data
        });
    },
    update: async (id, data) => {
        return await prisma.categorie.update({
            where: { id },
            data: data
        });
    },
    delete: async (id) => {
        return await prisma.categorie.delete({
            where: { id }
        });
    }
}