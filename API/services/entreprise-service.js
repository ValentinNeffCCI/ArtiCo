const entrepriseRepository = require("../repositories/entreprise-repository.js");
const entrepriseResource = require("../resources/entreprise-resource.js");
const entrepriseCollectionResource = require("../resources/collections/entreprise-collection-resource.js");
const fs = require("fs");
const HttpError = require("../customclasses/HttpError.js");
module.exports = {
  findById: async (id) => {
    const entreprise = await entrepriseRepository.findById(id);
    return entrepriseResource(entreprise, true);
  },
  findByUserId: async (id) => {
    return entrepriseCollectionResource(
      await entrepriseRepository.findByUserId(id)
    );
  },
  findAll: async (query = false) => {
    if (Object.keys(query).length == 0) {
      return entrepriseCollectionResource(
        await entrepriseRepository.findAll(),
        true
      );
    } else {
      const categorieId = query.categorieId
        ? parseInt(query.categorieId)
        : false;
      // Si ce n'est pas un Nan => si c'est un nombre
      if (query.categorieId && !isNaN(query.categorieId)) {
        query.categorie = {
          id: categorieId,
        };
      }
      delete query.categorieId;
      return await entrepriseCollectionResource(
        await entrepriseRepository.filter(query)
      );
    }
  },
  create: async (entreprise) => {
    return entrepriseResource(await entrepriseRepository.create(entreprise));
  },
  update: async (id, entreprise, deleteImage = false) => {
    if (deleteImage) {
      const ImageToDelete = await entrepriseRepository.findById(id);
      if (ImageToDelete.image) {
        const image = ImageToDelete.image;
        fs.unlinkSync("./" + image);
      }
    }
    return entrepriseResource(
      await entrepriseRepository.update(id, entreprise)
    );
  },
  delete: async (id) => {
    const entreprise = await entrepriseRepository.findById(id);
    if(!entreprise) throw new HttpError("Pas d'entreprise trouvée");
    if (entreprise.image) {
      const image = entreprise.image;
      if (fs.existsSync("./" + image)) {
        fs.unlinkSync("./" + image);
      }
    }
    if (entreprise.photos) {
      const photos = entreprise.photos;
      photos.forEach((photo) => {
        if (fs.existsSync("./" + photo)) {
          fs.unlinkSync("./" + photo);
        }
      });
    }
    await entrepriseRepository.delete(id);
    return true;
  },
  findByName: async (name) => {
    return entrepriseResource(await entrepriseRepository.findByName(name));
  },
  filter: async (fields) => {
    return entrepriseCollectionResource(
      await entrepriseRepository.filter(fields)
    );
  },
};
