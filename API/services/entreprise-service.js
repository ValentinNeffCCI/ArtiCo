const entrepriseRepository = require("../repositories/entreprise-repository.js");
const entrepriseResource = require("../resources/entreprise-resource.js");
const entrepriseCollectionResource = require("../resources/collections/entreprise-collection-resource.js");
const fs = require("fs");
module.exports = {
  findById: async (id) => {
    return entrepriseResource(await entrepriseRepository.findById(id), true);
  },
  findByUserId: async (id) => {
    return entrepriseCollectionResource(await entrepriseRepository.findByUserId(id));
  },
  findAll: async () => {
    return entrepriseCollectionResource(await entrepriseRepository.findAll());
  },
  create: async (entreprise) => {
    return entrepriseResource(await entrepriseRepository.create(entreprise));
  },
  update: async (id, entreprise, deleteImage = false) => {
    if(deleteImage) {
      const ImageToDelete = await entrepriseRepository.findById(id);
      if(ImageToDelete.image) {
        const image = ImageToDelete.image;
        fs.unlinkSync('./' + image);
      }
    }
    return entrepriseResource(await entrepriseRepository.update(id, entreprise));
  },
  delete: async (id) => {
    const ImageToDelete = await entrepriseRepository.findById(id);
    if(ImageToDelete.image) {
      const image = ImageToDelete.image;
      fs.unlinkSync('./' + image);
    }
    const galerieImagesToDelete = await entrepriseRepository.findById(id);
    if(galerieImagesToDelete.photos) {
      const images = galerieImagesToDelete.photos;
      images.forEach(image => {
        fs.unlinkSync('./' + image);
      });
    }
    const result = await entrepriseRepository.delete(id);
    return true;
  },
  findByName: async (name) => {
    return entrepriseResource(await entrepriseRepository.findByName(name));
  },
  filter: async (fields) => {
    return entrepriseCollectionResource(await entrepriseRepository.filter(fields));
  }
};
