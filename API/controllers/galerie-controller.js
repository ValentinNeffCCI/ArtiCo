const galerieService = require("../services/galerie-service.js");

module.exports = {
    getAllGaleries: async (req, res, next) => {
        try {
            const galeries = await galerieService.getAllGaleries();
            res.status(200).json(galeries);
        } catch (error) {
            next(error);
        }
    },
    getGalerieById: async (req, res, next) => {
        try {
            const galerie = await galerieService.getGalerieById(req.params.id);
            res.status(200).json(galerie);
        } catch (error) {
            next(error);
        }
    },
    getGalerieByEntrepriseId: async (req, res, next) => {
        try {
            const galerie = await galerieService.getGalerieByEntrepriseId(req.params.id);
            res.status(200).json(galerie);
        } catch (error) {
            next(error);
        }
    },
    createGalerie: async (req, res, next) => {
        try {
            const galerie = await galerieService.createGalerie(req.body);
            res.status(201).json(galerie);
        } catch (error) {
            next(error);
        }
    },
    deleteGalerie: async (req, res, next) => {
        try {
            const galerie = await galerieService.deleteGalerie(req.params.id);
            res.status(200).json(galerie);
        } catch (error) {
            next(error);
        }
    }
}