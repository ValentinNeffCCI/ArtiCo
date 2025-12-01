const entrepriseRepository = require("../repositories/entreprise-repository.js");

module.exports = {
  findById: async (id) => {
    return await entrepriseRepository.findById(id);
  },
  findAll: async () => {
    return await entrepriseRepository.findAll();
  },
  create: async (entreprise) => {
    return await entrepriseRepository.create(entreprise);
  },
  update: async (entreprise) => {
    return await entrepriseRepository.update(entreprise);
  },
  delete: async (id) => {
    return await entrepriseRepository.delete(id);
  },
  findByName: async (name) => {
    return await entrepriseRepository.findByName(name);
  },
  filter: async (fields) => {
    return await entrepriseRepository.filter(fields);
  }
};
