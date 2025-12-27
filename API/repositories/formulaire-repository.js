const prisma = require("../utils/client.js");

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
            options: true,
          },
        },
      },
    });
  },

  findByEntrepriseId: async (entrepriseId) => {
    return await prisma.formulaire.findMany({
      where: { entrepriseId },
    });
  },

  create: async (data) => {
    const { name, entrepriseId } = data;
    return await prisma.formulaire.create({
      data: {
        name,
        entreprise: {
          connect: {
            id: entrepriseId,
          },
        },
      },
    });
  },

  update: async (id, { name, inputs }) => {
    await prisma.formulaire.update({
      where: { id },
      data: { name },
    });

    for (const input of inputs) {
      const { id: inputId, name: inputName, type, required } = input;
      await prisma.input.update({
        where: { id: inputId },
        data: {
          name: inputName,
          type,
          required,
        },
      });
    }

    return await prisma.formulaire.findUnique({
      where: { id },
      include: {
        inputs: {
          include: {
            options: true,
          },
        },
      },
    });
  },

  delete: async (id) => {
    return await prisma.formulaire.delete({
      where: { id },
    });
  },
};
