const formulaireService = require("../services/formulaire-service.js");

module.exports = {
    getAllFormulaires: async (req, res, next) => {
        try {
            const formulaires = await formulaireService.getAllFormulaires();
            res.status(200).json(formulaires);
        } catch (error) {
            next(error);
        }
    },
    getFormulaireById: async (req, res, next) => {
        try {
            const formulaire = await formulaireService.getFormulaireById(req.params.id);
            res.status(200).json(formulaire);
        } catch (error) {
            next(error);
        }
    },
    getFormulaireByEntrepriseId: async (req, res, next) => {
        try {
            const formulaire = await formulaireService.getFormulaireByEntrepriseId(req.params.id);
            res.status(200).json(formulaire);
        } catch (error) {
            next(error);
        }
    },
    createFormulaire: async (req, res, next) => {
        try {
            const formulaire = await formulaireService.createFormulaire(req.body);
            res.status(201).json(formulaire);
        } catch (error) {
            next(error);
        }
    },
    updateFormulaire: async (req, res, next) => {
        try {
            const formulaire = await formulaireService.updateFormulaire(req.params.id, req.body);
            res.status(200).json(formulaire);
        } catch (error) {
            next(error);
        }
    },
    deleteFormulaire: async (req, res, next) => {
        try {
            const formulaire = await formulaireService.deleteFormulaire(req.params.id);
            res.status(200).json(formulaire);
        } catch (error) {
            next(error);
        }
    }
}