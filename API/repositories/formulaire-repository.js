const prisma = require("../constants/client.js");

module.exports = {
    findAll: async () => {
        return await prisma.formulaire.findMany();
    },

    findById: async (id) => {
        return await prisma.formulaire.findUnique({
            where: { id },
            include: {
                inputs: {
                    include: {
                        options: true
                    }
                }
            }
        });
    },

    findByEntrepriseId: async (entrepriseId) => {
        return await prisma.formulaire.findMany({
            where: { entrepriseId }
        });
    },

    create: async (name, entrepriseId) => {
        return await prisma.formulaire.create({
            data: {
                name,
                entrepriseId
            }
        });
    },

    update: async (id, name) => {
        return await prisma.formulaire.update({
            where: { id },
            data: { name }
        });
    },

    delete: async (id) => {
        return await prisma.formulaire.delete({
            where: { id },
        });
    }
};
