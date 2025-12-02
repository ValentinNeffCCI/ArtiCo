const inputRepository = require("../repositories/input-repository.js");
const inputResource = require("../resources/input-resource.js");
const inputCollectionResource = require("../resources/collections/input-collection-resource.js");
module.exports = {
    findById: async (id) => {
        return inputResource(await inputRepository.findById(id));
    },
    findAll: async () => {
        return inputCollectionResource(await inputRepository.findAll());
    },
    create: async (data) => {
        return inputResource(await inputRepository.create(data));
    },
    update: async (id, data) => {
        return inputResource(await inputRepository.update(id, data));
    },
    delete: async (id) => {
        return inputResource(await inputRepository.delete(id));
    }
}