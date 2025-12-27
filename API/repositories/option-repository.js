const prisma = require("../utils/client.js");

module.exports = {
    findAll: async () => {
        return await prisma.option.findMany();
    },
    findById: async (id) => {
        return await prisma.option.findUnique({
            where: { id }
        });
    },
    findByInputId: async (inputId) => {
        return await prisma.option.findMany({
            where: { inputId }
        });
    },
    create: async ({value, inputId}) => {
        return await prisma.option.create({
            data: {
                value,
                input: {
                    connect:{
                        id: inputId
                    }
                }
            }
        });
    },
    update: async (id, data) => {
        return await prisma.option.update({
            where: { id },
            data: data
        });
    },
    delete: async (id) => {
        return await prisma.option.delete({
            where: { id }
        });
    }
}