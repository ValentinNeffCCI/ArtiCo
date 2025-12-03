const express = require('express');
const router = express.Router();
const FormulaireController = require('../controllers/formulaire-controller.js');
const authenticated = require('../middlewares/authenticated.js');
const idParser = require('../middlewares/id-parser.js');

router.get('/', FormulaireController.getAllFormulaires);
router.get('/:id', idParser, FormulaireController.getFormulaireById);
router.get('/entreprise/:id', idParser, FormulaireController.getFormulaireByEntrepriseId);
router.post('/', authenticated(),FormulaireController.createFormulaire);
router.put('/:id', idParser, authenticated(),FormulaireController.updateFormulaire);
router.delete('/:id', idParser, authenticated(),FormulaireController.deleteFormulaire);

module.exports = router;