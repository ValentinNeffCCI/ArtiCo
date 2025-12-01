const categorieService = require("../services/categorie-service.js");

module.exports = {
    getAllCategories: async (req, res, next) => {
        try {
            const categories = await categorieService.getAllCategories();
            res.status(200).json(categories);
        } catch (error) {
            next(err);
        }
    },
    getCategorieById: async (req, res, next) => {
        try {
            const categorie = await categorieService.getCategorieById(req.params.id);
            res.status(200).json(categorie);
        } catch (error) {
            next(err);
        }
    },
    updateCategorie: async (req, res, next) => {
        try {
            const categorie = await categorieService.updateCategorie(req.params.id, req.body);
            res.status(200).json(categorie);
        } catch (error) {
            next(err);
        }
    },
    deleteCategorie: async (req, res, next) => {
        try {
            const categorie = await categorieService.deleteCategorie(req.params.id);
            res.status(200).json(categorie);
        } catch (error) {
            next(err);
        }
    }
}