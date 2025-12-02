const entrepriseService = require("../services/entreprise-service.js");

module.exports = {
    getAllEntreprises: async (req, res, next) => {
        try {
            const entreprises = await entrepriseService.getAllEntreprises();
            res.status(200).json(entreprises);
        } catch (error) {
            next(error);
        }
    },
    getEntrepriseById: async (req, res, next) => {
        try {
            const entreprise = await entrepriseService.getEntrepriseById(req.params.id);
            res.status(200).json(entreprise);
        } catch (error) {
            next(error);
        }
    },
    createEntreprise: async (req, res, next) => {
        try {
            const entreprise = await entrepriseService.createEntreprise(req.body);
            res.status(201).json(entreprise);
        } catch (error) {
            next(error);
        }
    },
    updateEntreprise: async (req, res, next) => {
        try {
            const entreprise = await entrepriseService.updateEntreprise(req.params.id, req.body);
            res.status(200).json(entreprise);
        } catch (error) {
            next(error);
        }
    },
    deleteEntreprise: async (req, res, next) => {
        try {
            const entreprise = await entrepriseService.deleteEntreprise(req.params.id);
            res.status(200).json(entreprise);
        } catch (error) {
            next(error);
        }
    }
}