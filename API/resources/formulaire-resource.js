const formulaireResource = (formulaire, inputs = false) => {
    if(!formulaire) throw new HttpError("Aucun formulaire trouvé", 404);
    return {
        id: formulaire.id,
        name: formulaire.name,
        inputs: inputs ? formulaire.inputs : false
    }
}

module.exports = formulaireResource;
