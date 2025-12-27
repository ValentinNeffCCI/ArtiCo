const prisma = require("../utils/client.js");

module.exports = {
  findAll: async () => {
    return await prisma.soumission.findMany();
  },
  findById: async (id) => {
    return await prisma.soumission.findUnique({
      where: { id },
    });
  },
  findByFormulaireId: async (formulaireId) => {
    return await prisma.soumission.findMany({
      where: {
        formulaireId,
      },
      include: {
        formulaire: true,
      },
    });
  },
  create: async (data) => {
    return await prisma.soumission.create({
      data: data,
      select: {
        content: true,
        formulaire: {
          select: {
            name: true,
          },
        },
      },
    });
  },
  delete: async (id) => {
    return await prisma.soumission.delete({
      where: { id },
    });
  },
};
