const galerieRepository = require("../repositories/galerie-repository.js");
const galerieResource = require("../resources/galerie-resource.js");
const galerieCollectionResource = require("../resources/collections/galerie-collection-resource.js");
const fs = require("fs");
module.exports = {
    findById: async (id) => {
        return galerieResource(await galerieRepository.findById(id), true);
    },
    findAll: async () => {
        return galerieCollectionResource(await galerieRepository.findAll());
    },
    findAllByEntrepriseId: async (entrepriseId) => {
        return galerieCollectionResource(await galerieRepository.findByEntrepriseId(entrepriseId));
    },
    create: async (data) => {
        return galerieResource(await galerieRepository.create(data));
    },
    delete: async (id) => {
        const file = await galerieRepository.findById(id);
        if(file) {
            console.log(file.path);
            fs.unlinkSync(file.path);
        }
        await galerieRepository.delete(id);
        return true;
    }
}