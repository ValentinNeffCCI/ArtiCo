const HttpError = require("../customclasses/HttpError");
const galerieResource = (galerie) => {
    if(!galerie) throw new HttpError("Aucune galerie trouvée", 404);
    return {
        id: galerie.id,
        path: galerie.path
    }
}

module.exports = galerieResource;
