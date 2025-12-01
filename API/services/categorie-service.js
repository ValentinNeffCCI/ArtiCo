const categorieRepository = require("../repositories/categorie-repository.js");

module.exports = {
    findById: async (id) => {
        return await categorieRepository.findById(id);
    },
    findAll: async () => {
        return await categorieRepository.findAll();
    },
    create: async (data) => {
        return await categorieRepository.create(data);
    },
    update: async (id, data) => {
        return await categorieRepository.update(id, data);
    },
    delete: async (id) => {
        return await categorieRepository.delete(id);
    }
}