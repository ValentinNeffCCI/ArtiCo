const formulaireResource = require("../formulaire-resource.js");

const formulaireCollectionResource = (formulaires) => {
    return formulaires.map(f => formulaireResource(f));
}

module.exports = formulaireCollectionResource;
