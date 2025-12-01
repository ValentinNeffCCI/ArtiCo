const express = require('express');
const router = express.Router();
const GalerieController = require('../controllers/galerie-controller.js');
const authenticated = require('../middlewares/authenticated.js');

router.get('/', GalerieController.getAllGaleries);
router.get('/:id', GalerieController.getGalerieById);
router.get('/entreprise/:id', GalerieController.getGalerieByEntrepriseId);
router.post('/', authenticated(),GalerieController.createGalerie);
router.delete('/:id', authenticated(),GalerieController.deleteGalerie);

module.exports = router;