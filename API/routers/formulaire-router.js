const express = require('express');
const router = express.Router();
const FormulaireController = require('../controllers/formulaire-controller.js');
const authenticated = require('../middlewares/authenticated.js');
const idParser = require('../middlewares/id-parser.js');
const verifyAccessFormulaire = require('../middlewares/formulaire-acces.js');

router.get('/', FormulaireController.getAllFormulaires);
router.get('/:id', idParser, FormulaireController.getFormulaireById);
router.get('/entreprise/:id', idParser, FormulaireController.getFormulaireByEntrepriseId);
router.post('/', authenticated(),FormulaireController.createFormulaire);
router.put('/:id', idParser, authenticated(), verifyAccessFormulaire,FormulaireController.updateFormulaire);
router.delete('/:id', idParser, authenticated(), verifyAccessFormulaire, FormulaireController.deleteFormulaire);

module.exports = router;