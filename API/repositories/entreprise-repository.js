const prisma = require("../constants/client.js")

module.exports = {
    findAll: async () => {
        return await prisma.entreprise.findMany();
    },
    findById: async (id) => {
        return await prisma.entreprise.findUnique({
            where: { id },
            include: {
                owner: true,
                categories: true,
                photos: true
            }
        });
    },
    findByUserId: async (id) => {
        return await prisma.entreprise.findMany({
            where: { ownerId: id }
        });
    },
    filter: async (fields) => {
        return await prisma.entreprise.findMany({
            where: fields
        });
    },
    create: async (data) => {
        return await prisma.entreprise.create({
            data: data
        });
    },
    update: async (id, data) => {
        return await prisma.entreprise.update({
            where: { id },
            data: data
        });
    },
    delete: async (id) => {
        return await prisma.entreprise.delete({
            where: { id }
        });
    }
}