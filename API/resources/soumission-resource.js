const formulaireResource = require("./formulaire-resource.js");
const HttpError = require("../customclasses/HttpError");
const soumissionResource = (soumission, formulaire = false) => {
    if(!soumission) throw new HttpError("Aucune soumission trouvée", 404);
    return {
        id: soumission.id,
        content: soumission.content,
        submittedAt: soumission.createdAt,
        formulaire: formulaire ? formulaireResource(formulaire) : false,
    }
}

module.exports = soumissionResource;
