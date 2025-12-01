module.exports = {
    findById: async (id) => {
        return await optionRepository.findById(id);
    },
    findAll: async () => {
        return await optionRepository.findAll();
    },
    create: async (data) => {
        return await optionRepository.create(data);
    },
    update: async (id, data) => {
        return await optionRepository.update(id, data);
    },
    delete: async (id) => {
        return await optionRepository.delete(id);
    }
}