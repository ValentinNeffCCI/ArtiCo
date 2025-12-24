const entrepriseResource = require("../entreprise-resource.js");

const entrepriseCollectionResource = (entreprises, admin = false) => {
    return entreprises.map(e => entrepriseResource(e, admin));
}

module.exports = entrepriseCollectionResource;
