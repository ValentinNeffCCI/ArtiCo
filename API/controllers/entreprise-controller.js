const entrepriseService = require("../services/entreprise-service.js");

module.exports = {
    getAllEntreprises: async (req, res, next) => {
        try {
            const entreprises = await entrepriseService.findAll();
            res.status(200).json(entreprises);
        } catch (error) {
            next(error);
        }
    },
    getEntrepriseById: async (req, res, next) => {
        try {
            const entreprise = await entrepriseService.findById(req.params.id);
            res.status(200).json(entreprise);
        } catch (error) {
            next(error);
        }
    },
    getEntreprisesByUserId: async (req, res, next) => {
        try {
            const entreprises = await entrepriseService.findByUserId(req.params.id);
            res.status(200).json(entreprises);
        } catch (error) {
            next(error);
        }
    },
    createEntreprise: async (req, res, next) => {
        try {
            // Bug multer ajoute double \ au path
            if(req.file){
                req.body.image = req.file.path.replace('\\', '/');
            }
            req.body.ownerId = req.user.id;
            const entreprise = await entrepriseService.create(req.body);
            res.status(201).json(entreprise);
        } catch (error) {
            next(error);
        }
    },
    updateEntreprise: async (req, res, next) => {
        try {
            if(req.file){
                // Bug multer ajoute double \ au path
                req.body.image = req.file.path.replace('\\', '/');
            }
            req.body.ownerId = req.user.id;
            const entreprise = await entrepriseService.update(req.params.id, req.body);
            res.status(200).json(entreprise);
        } catch (error) {
            next(error);
        }
    },
    deleteEntreprise: async (req, res, next) => {
        try {
            const entreprise = await entrepriseService.delete(req.params.id);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}