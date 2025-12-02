const categorieResource = require("../categorie-resource.js");

const categorieCollectionResource = (categories, entreprises = false) => {
    return categories.map(categorie => categorieResource(categorie, entreprises));
}

module.exports = categorieCollectionResource;