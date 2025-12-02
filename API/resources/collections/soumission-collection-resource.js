const soumissionResource = require("../soumission-resource.js");

const soumissionCollectionResource = (soumissions) => {
    return soumissions.map(s => soumissionResource(s));
}

module.exports = soumissionCollectionResource;
