const galerieResource = require("../galerie-resource.js");

const galerieCollectionResource = (galeries) => {
    return galeries.map(g => galerieResource(g));
}

module.exports = galerieCollectionResource;
