const HttpError = require("../customclasses/HttpError");
const userResource = require("./user-resource");

const entrepriseResource = (entreprise, details = false) => {
    if(!entreprise) throw new HttpError("Aucune entreprise trouvée", 404);
    return {
        id: entreprise.id,
        name: entreprise.name,
        email: details ? entreprise.email : false,
        city: entreprise.city,
        cp: entreprise.cp,
        address1: entreprise.address1,
        address2: details ? (entreprise.address2 ?? "") : false,
        phone: details ? entreprise.phone : false,
        description: details ? entreprise.description : false,
        image: entreprise.image,
        owner: entreprise.owner ? userResource(entreprise.owner) : false,
        categorie: entreprise.categories,
        photos: details ? entreprise.photos : false
    }
}

module.exports = entrepriseResource;
