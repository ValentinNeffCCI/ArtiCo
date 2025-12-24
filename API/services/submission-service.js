const submissionRepository = require("../repositories/submission-repository.js");
const submissionResource = require("../resources/soumission-resource.js");
const submissionCollectionResource = require("../resources/collections/soumission-collection-resource.js");
const formulaireRepository = require("../repositories/formulaire-repository.js");
const HttpError = require("../customclasses/HttpError.js");
const soumissionCollectionResource = require("../resources/collections/soumission-collection-resource.js");
module.exports = {
    findById: async (id) => {
        return submissionResource(await submissionRepository.findById(id), true);
    },
    findAll: async () => {
        return submissionCollectionResource(await submissionRepository.findAll(), true);
    },
    findByFormulaireId: async (formulaireId) => {
        const responses = await submissionRepository.findByFormulaireId(formulaireId);
        return soumissionCollectionResource(responses, true);
    },
    create: async (data) => {
        const form = await formulaireRepository.findById(data.formulaireId);
        if(!form){
            throw new HttpError('Pas de formulaire trouvé !', 404);
        }
        return submissionResource(await submissionRepository.create(data));
    },
    delete: async (id) => {
        return submissionResource(await submissionRepository.delete(id));
    }
}