const prisma = require("../constants/client.js");

module.exports = {
    findAll: async () => {
        return await prisma.input.findMany();
    },
    findById: async (id) => {
        return await prisma.input.findUnique({
            where: { id },
            include: {
                options: true
            }
        });
    },
    findByFormulaireId: async (formulaireId) => {
        return await prisma.input.findMany({
            where: { formulaireId },
            include: {
                options: true
            }
        });
    },
    create: async (type, required, name, formulaireId) => {
        return await prisma.input.create({
            data: {
                type,
                required,
                name,
                formulaireId
            }
        });
    },
    update: async (id, type, required, name) => {
        return await prisma.input.update({
            where: { id },
            data: {
                type,
                required,
                name
            }
        });
    },
    delete: async (id) => {
        return await prisma.input.delete({
            where: { id }
        });
    }
}