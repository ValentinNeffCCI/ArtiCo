const prisma = require("../constants/client.js")

module.exports = {
    findAll: async () => {
        return await prisma.categorie.findMany();
    },
    findById: async (id) => {
        return await prisma.categorie.findUnique({ 
            where: { id: id },
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
            where: { id: id }, 
            data: data 
        });
    },
    delete: async (id) => {
        return await prisma.categorie.delete({ 
            where: { id: id }   
        });
    }
}