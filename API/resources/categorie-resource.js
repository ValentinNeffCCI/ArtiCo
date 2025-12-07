const HttpError = require("../customclasses/HttpError");
const categorieResource = (categorie, entreprises = false) => {
    if(!categorie) throw new HttpError("Aucune catégorie trouvée", 404);
    return {
        id: categorie.id,
        name: categorie.name,
        entreprises: entreprises ? categorie.entreprises : false
    }
}

module.exports = categorieResource;
