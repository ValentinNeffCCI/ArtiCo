const inputRepository = require("../repositories/input-repository.js");

module.exports = {
    findById: async (id) => {
        return await inputRepository.findById(id);
    },
    findAll: async () => {
        return await inputRepository.findAll();
    },
    create: async (data) => {
        return await inputRepository.create(data);
    },
    update: async (id, data) => {
        return await inputRepository.update(id, data);
    },
    delete: async (id) => {
        return await inputRepository.delete(id);
    }
}