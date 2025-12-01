module.exports = {
    findById: async (id) => {
        return await galerieRepository.findById(id);
    },
    findAll: async () => {
        return await galerieRepository.findAll();
    },
    findByEntrepriseId: async (entrepriseId) => {
        return await galerieRepository.findByEntrepriseId(entrepriseId);
    },
    create: async (data) => {
        return await galerieRepository.create(data);
    },
    delete: async (id) => {
        return await galerieRepository.delete(id);
    }
}