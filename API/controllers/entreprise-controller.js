const entrepriseService = require("../services/entreprise-service.js");

module.exports = {
    getAllEntreprises: async (req, res, next) => {
        try {
            const entreprises = await entrepriseService.getAllEntreprises();
            res.status(200).json(entreprises);
        } catch (error) {
            next(err);
        }
    },
    getEntrepriseById: async (req, res, next) => {
        try {
            const entreprise = await entrepriseService.getEntrepriseById(req.params.id);
            res.status(200).json(entreprise);
        } catch (error) {
            next(err);
        }
    },
    createEntreprise:   async (req, res, next) => {
        try {
            const entreprise = await entrepriseService.createEntreprise(req.body);
            res.status(201).json(entreprise);
        } catch (error) {
            next(err);
        }
    },
    updateEntreprise: async (req, res, next) => {
        try {
            const entreprise = await entrepriseService.updateEntreprise(req.params.id, req.body);
            res.status(200).json(entreprise);
        } catch (error) {
            next(err);
        }
    },
    deleteEntreprise: async (req, res, next) => {
        try {
            const entreprise = await entrepriseService.deleteEntreprise(req.params.id);
            res.status(200).json(entreprise);
        } catch (error) {
            next(err);
        }
    }
}