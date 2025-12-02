const optionResource = require("../resources/option-resource.js");
const optionCollectionResource = require("../resources/collections/option-collection-resource.js");
module.exports = {
    findById: async (id) => {
        return optionResource(await optionRepository.findById(id));
    },
    findAll: async () => {
        return optionCollectionResource(await optionRepository.findAll());
    },
    create: async (data) => {
        return optionResource(await optionRepository.create(data));
    },
    update: async (id, data) => {
        return optionResource(await optionRepository.update(id, data));
    },
    delete: async (id) => {
        return optionResource(await optionRepository.delete(id));
    }
}