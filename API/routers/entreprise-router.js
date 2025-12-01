const express = require('express');
const router = express.Router();
const authenticated = require('../middlewares/authenticated.js');
const entrepriseController = require('../controllers/entreprise-controller.js');

router.get('/', entrepriseController.getAllEntreprises);
router.get('/:id', entrepriseController.getEntrepriseById);
router.post('/', authenticated(),entrepriseController.createEntreprise);
router.put('/:id', authenticated(),entrepriseController.updateEntreprise);
router.delete('/:id', authenticated(),entrepriseController.deleteEntreprise);

module.exports = router;