const entrepriseRepository = require("../repositories/entreprise-repository.js");
const entrepriseResource = require("../resources/entreprise-resource.js");
const entrepriseCollectionResource = require("../resources/collections/entreprise-collection-resource.js");
module.exports = {
  findById: async (id) => {
    return entrepriseResource(await entrepriseRepository.findById(id));
  },
  findByUserId: async (id) => {
    return entrepriseCollectionResource(await entrepriseRepository.findByUserId(id));
  },
  findAll: async () => {
    return entrepriseCollectionResource(await entrepriseRepository.findAll());
  },
  create: async (entreprise) => {
    return entrepriseResource(await entrepriseRepository.create(entreprise));
  },
  update: async (entreprise) => {
    return entrepriseResource(await entrepriseRepository.update(entreprise));
  },
  delete: async (id) => {
    return entrepriseResource(await entrepriseRepository.delete(id));
  },
  findByName: async (name) => {
    return entrepriseResource(await entrepriseRepository.findByName(name));
  },
  filter: async (fields) => {
    return entrepriseCollectionResource(await entrepriseRepository.filter(fields));
  }
};
