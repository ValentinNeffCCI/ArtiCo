const express = require('express');
const router = express.Router();
const FormulaireController = require('../controllers/formulaire-controller.js');
const authenticated = require('../middlewares/authenticated.js');

router.get('/', FormulaireController.getAllFormulaires);
router.get('/:id', FormulaireController.getFormulaireById);
router.get('/entreprise/:id', FormulaireController.getFormulaireByEntrepriseId);
router.post('/', authenticated(),FormulaireController.createFormulaire);
router.put('/:id', authenticated(),FormulaireController.updateFormulaire);
router.delete('/:id', authenticated(),FormulaireController.deleteFormulaire);

module.exports = router;