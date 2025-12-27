const formulaireService = require("../services/formulaire-service.js");

module.exports = {
    getAllFormulaires: async (req, res, next) => {
        try {
            const formulaires = await formulaireService.findAll();
            res.status(200).json(formulaires);
        } catch (error) {
            return next(error);
        }
    },
    getFormulaireById: async (req, res, next) => {
        try {
            const formulaire = await formulaireService.findById(req.params.id);
            res.status(200).json(formulaire);
        } catch (error) {
            return next(error);
        }
    },
    getFormulaireByEntrepriseId: async (req, res, next) => {
        try {
            const formulaire = await formulaireService.findByEntrepriseId(req.params.id);
            res.status(200).json(formulaire);
        } catch (error) {
            return next(error);
        }
    },
    createFormulaire: async (req, res, next) => {
        try {
            const formulaire = await formulaireService.create(req.body);
            res.status(201).json(formulaire);
        } catch (error) {
            return next(error);
        }
    },
    updateFormulaire: async (req, res, next) => {
        try {
            const formulaire = await formulaireService.update(req.params.id, req.body);
            res.status(200).json(formulaire);
        } catch (error) {
            return next(error);
        }
    },
    deleteFormulaire: async (req, res, next) => {
        try {
            const formulaire = await formulaireService.delete(req.params.id);
            res.status(200).json(formulaire);
        } catch (error) {
            return next(error);
        }
    }
}