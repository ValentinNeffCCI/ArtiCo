const categorieResource = (categorie, entreprises = false) => {
    return {
        id: categorie.id,
        name: categorie.name,
        entreprises: entreprises ? categorie.entreprises : false
    }
}

module.exports = categorieResource;
