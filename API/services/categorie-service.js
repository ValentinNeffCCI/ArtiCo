const categorieRepository = require("../repositories/categorie-repository.js");
const categorieResource = require("../resources/categorie-resource.js");
const categorieCollectionResource = require("../resources/collections/categorie-collection-resource.js");

module.exports = {
    findById: async (id) => {
        return categorieResource(await categorieRepository.findById(id), true);
    },
    findAll: async () => {
        return categorieCollectionResource(await categorieRepository.findAll());
    },
    create: async (data) => {
        return categorieResource(await categorieRepository.create(data));
    },
    update: async (id, data) => {
        return categorieResource(await categorieRepository.update(id, data));
    },
    delete: async (id) => {
        return categorieResource(await categorieRepository.delete(id));
    }
}