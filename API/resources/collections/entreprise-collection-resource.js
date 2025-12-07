const entrepriseResource = require("../entreprise-resource.js");

const entrepriseCollectionResource = (entreprises) => {
    return entreprises.map(e => entrepriseResource(e));
}

module.exports = entrepriseCollectionResource;
