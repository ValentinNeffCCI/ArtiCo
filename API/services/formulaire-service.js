const formulaireRepository = require("../repositories/formulaire-repository.js");
const formulaireResource = require("../resources/formulaire-resource.js");
const formulaireCollectionResource = require("../resources/collections/formulaire-collection-resource.js");
module.exports = {
    findById: async (id) => {
        return formulaireResource(await formulaireRepository.findById(id));
    },
    findAll: async () => {
        return formulaireCollectionResource(await formulaireRepository.findAll());
    },
    create: async (data) => {
        return formulaireResource(await formulaireRepository.create(data));
    },
    update: async (id, data) => {
        return formulaireResource(await formulaireRepository.update(id, data));
    },
    delete: async (id) => {
        return formulaireResource(await formulaireRepository.delete(id));
    }
}