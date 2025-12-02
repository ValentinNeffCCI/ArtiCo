const formulaireResource = require("./formulaire-resource.js");

const soumissionResource = (soumission, formulaire = false) => {
    return {
        id: soumission.id,
        content: soumission.content,
        submittedAt: soumission.createdAt,
        formulaire: formulaire ? formulaireResource(formulaire) : false,
    }
}

module.exports = soumissionResource;
