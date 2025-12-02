const galerieRepository = require("../repositories/galerie-repository.js");
const galerieResource = require("../resources/galerie-resource.js");
const galerieCollectionResource = require("../resources/collections/galerie-collection-resource.js");
module.exports = {
    findById: async (id) => {
        return galerieResource(await galerieRepository.findById(id));
    },
    findAll: async () => {
        return galerieCollectionResource(await galerieRepository.findAll());
    },
    findByEntrepriseId: async (entrepriseId) => {
        return galerieCollectionResource(await galerieRepository.findByEntrepriseId(entrepriseId));
    },
    create: async (data) => {
        return galerieResource(await galerieRepository.create(data));
    },
    delete: async (id) => {
        return galerieResource(await galerieRepository.delete(id));
    }
}