const submissionRepository = require("../repositories/submission-repository.js");

module.exports = {
    findById: async (id) => {
        return await submissionRepository.findById(id);
    },
    findAll: async () => {
        return await submissionRepository.findAll();
    },
    findByFormulaireId: async (formulaireId) => {
        return await submissionRepository.findByFormulaireId(formulaireId);
    },
    create: async (data) => {
        return await submissionRepository.create(data);
    },
    delete: async (id) => {
        return await submissionRepository.delete(id);
    }
}