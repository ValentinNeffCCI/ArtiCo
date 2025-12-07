const submissionRepository = require("../repositories/submission-repository.js");
const submissionResource = require("../resources/soumission-resource.js");
const submissionCollectionResource = require("../resources/collections/soumission-collection-resource.js");
module.exports = {
    findById: async (id) => {
        return submissionResource(await submissionRepository.findById(id), true);
    },
    findAll: async () => {
        return submissionCollectionResource(await submissionRepository.findAll(), true);
    },
    findByFormulaireId: async (formulaireId) => {
        return submissionResource(await submissionRepository.findByFormulaireId(formulaireId), true);
    },
    create: async (data) => {
        return submissionResource(await submissionRepository.create(data));
    },
    delete: async (id) => {
        return submissionResource(await submissionRepository.delete(id));
    }
}