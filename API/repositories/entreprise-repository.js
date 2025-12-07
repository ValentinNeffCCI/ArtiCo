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
            where: { ownerId: id },
            include: {
                owner: true,
                categories: true,
                photos: true
            }
        });
    },
    filter: async (fields) => {
        return await prisma.entreprise.findMany({
            where: fields
        });
    },
    create: async (data) => {
        return await prisma.entreprise.create({
            data: {
                name: data.name,
                description: data.description,
                address1: data.address1,
                address2: data.address2 ? data.address2 : null,
                city: data.city,
                cp: data.cp,
                phone: data.phone ? data.phone : null,
                email: data.email,
                description: data.description ? data.description : null,
                image: data.image ? data.image : null,
                owner: { connect: { id: data.ownerId } },
                categories: { connect: { id: parseInt(data.categorieId) } }
            },
            select: {
                id: true,
                name: true,
                description: true,
                address1: true,
                address2: true,
                city: true,
                cp: true,
                phone: true,
                email: true,
                description: true,
                image: true,
                owner: true,
                categories: true,
                photos: true
            }
        });
    },
    update: async (id, data) => {
        id = parseInt(id);
        return await prisma.entreprise.update({
            where: { id },
            data: {
                name: data.name,
                description: data.description,
                address1: data.address1,
                address2: data.address2 ? data.address2 : null,
                city: data.city,
                cp: data.cp,
                phone: data.phone ? data.phone : null,
                email: data.email,
                description: data.description ? data.description : null,
                image: data.image ? data.image : null,
                categories: { connect: { id: parseInt(data.categorieId) } }
            },
            select: {
                id: true,
                name: true,
                description: true,
                address1: true,
                address2: true,
                city: true,
                cp: true,
                phone: true,
                email: true,
                description: true,
                image: true,
                owner: true,
                categories: true,
                photos: true
            }
        });
    },
    delete: async (id) => {
        return await prisma.entreprise.delete({
            where: { id }
        });
    }
}