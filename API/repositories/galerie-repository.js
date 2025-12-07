const prisma = require("../constants/client.js");

module.exports = {
    findById: async (id) => {
        return await prisma.galerie.findUnique({ where: { id } });
    },
    findAll: async () => {
        return await prisma.galerie.findMany();
    },
    findByEntrepriseId: async (entrepriseId) => {
        return await prisma.galerie.findMany({ where: { entrepriseId } });
    },
    create: async (data) => {
        return await prisma.galerie.create({ 
            data: { 
                path: data.path, 
                entreprise: { 
                    connect: { id: parseInt(data.entrepriseId) } 
                } 
            } 
        });
    },
    delete: async (id) => {
        return await prisma.galerie.delete({ where: { id } });
    }
}