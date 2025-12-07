const categorieService = require("../services/categorie-service.js");

module.exports = {
    getAllCategories: async (req, res, next) => {
        try {
            const limit = req.query.limit ? parseInt(req.query.limit) : false;
            const categories = await categorieService.findAll(limit);
            res.status(200).json(categories);
        } catch (error) {
            next(error);
        }
    },
    getCategorieById: async (req, res, next) => {
        try {
            const categorie = await categorieService.findById(req.params.id);
            res.status(200).json(categorie);
        } catch (error) {
            next(error);
        }
    },
    createCategorie: async (req, res, next) => {
        try {
            const categorie = await categorieService.create(req.body);
            res.status(201).json(categorie);
        } catch (error) {
            next(error);
        }
    },
    updateCategorie: async (req, res, next) => {
        try {
            const categorie = await categorieService.update(req.params.id, req.body);
            res.status(200).json(categorie);
        } catch (error) {
            next(error);
        }
    },
    deleteCategorie: async (req, res, next) => {
        try {
            const categorie = await categorieService.delete(req.params.id);
            res.status(200).json(categorie);
        } catch (error) {
            next(error);
        }
    }
}