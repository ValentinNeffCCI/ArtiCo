module.exports = {
    findById: async (id) => {
        return await formulaireRepository.findById(id);
    },
    findAll: async () => {
        return await formulaireRepository.findAll();
    },
    create: async (data) => {
        return await formulaireRepository.create(data);
    },
    update: async (id, data) => {
        return await formulaireRepository.update(id, data);
    },
    delete: async (id) => {
        return await formulaireRepository.delete(id);
    }
}