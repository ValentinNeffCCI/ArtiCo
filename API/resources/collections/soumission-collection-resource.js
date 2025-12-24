const soumissionResource = require("../soumission-resource.js");

const soumissionCollectionResource = (soumissions, form = false) => {
    return soumissions.map(s => soumissionResource(s, form));
}

module.exports = soumissionCollectionResource;
