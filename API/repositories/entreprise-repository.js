const prisma = require("../constants/client.js");

module.exports = {
  findAll: async () => {
    return await prisma.entreprise.findMany({
      include: {
        categorie: true,
      },
    });
  },
  findById: async (id) => {
    return await prisma.entreprise.findUnique({
      where: { id },
      include: {
        owner: true,
        categorie: true,
        photos: true,
        formulaires: true,
      },
    });
  },
  findByUserId: async (id) => {
    return await prisma.entreprise.findMany({
      where: { ownerId: id },
      include: {
        owner: true,
        categorie: true,
        photos: true,
      },
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
        categorie: { connect: { id: parseInt(data.categorieId) } },
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
        categorie: true,
        photos: true,
      },
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
        categorie: { connect: { id: parseInt(data.categorieId) } },
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
        categorie: true,
        photos: true,
      },
    });
  },
  delete: async (id) => {
    return await prisma.entreprise.delete({
      where: { id },
    });
  },
  filter: async (filters) => {
    const { name, limit, ...restFilters } = filters;

    return prisma.entreprise.findMany({
      where: {
        AND: [
          restFilters,
          name
            ? {
                OR: [
                  {
                    name: {
                      contains: name,
                      mode: "insensitive",
                    },
                  },
                  {
                    city: {
                      contains: name,
                      mode: "insensitive",
                    },
                  },
                ],
              }
            : {},
        ],
      },
      take: limit ? parseInt(limit) : 50,
    });
  },
};
