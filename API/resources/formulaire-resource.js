const formulaireResource = (formulaire, inputs = false) => {
    return {
        id: formulaire.id,
        name: formulaire.name,
        inputs: inputs ? formulaire.inputs : false
    }
}

module.exports = formulaireResource;
