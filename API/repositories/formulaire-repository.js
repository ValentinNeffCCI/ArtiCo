const prisma = require("../utils/client.js");

// Construit le payload `inputs.create` imbriqué pour Prisma.
// On retire les ids (uuid côté front ou Int existants) et les clés
// relationnelles scalaires (formulaireId/inputId) : Prisma les gère via les
// relations, et les envoyer provoquerait une erreur de type / un conflit.
const buildInputsCreate = (inputs = []) =>
  inputs.map(({ id, formulaireId, options = [], ...input }) => ({
    ...input,
    options: {
      create: options.map(({ id, inputId, ...option }) => option),
    },
  }));

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
    const { name, entrepriseId, inputs = [] } = data;
    return await prisma.formulaire.create({
      data: {
        name,
        entreprise: {
          connect: {
            id: entrepriseId,
          },
        },
        inputs: {
          create: buildInputsCreate(inputs),
        },
      },
      include: {
        inputs: {
          include: {
            options: true,
          },
        },
      },
    });
  },

  update: async (id, { name, inputs = [] }) => {
    // Le builder envoie l'état complet du formulaire. On synchronise en
    // remplaçant tous les inputs (la suppression cascade les options), puis
    // en les recréant. Le tout dans une transaction pour rester cohérent.
    return await prisma.$transaction(async (tx) => {
      await tx.formulaire.update({
        where: { id },
        data: { name },
      });

      await tx.input.deleteMany({ where: { formulaireId: id } });

      for (const input of buildInputsCreate(inputs)) {
        await tx.input.create({
          data: {
            ...input,
            formulaire: { connect: { id } },
          },
        });
      }

      return await tx.formulaire.findUnique({
        where: { id },
        include: {
          inputs: {
            include: {
              options: true,
            },
          },
        },
      });
    });
  },

  delete: async (id) => {
    return await prisma.formulaire.delete({
      where: { id },
    });
  },
};
