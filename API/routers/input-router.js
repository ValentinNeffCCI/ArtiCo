const express = require('express');
const router = express.Router();
const InputController = require('../controllers/input-controller.js');
const authenticated = require('../middlewares/authenticated.js');
const idParser = require('../middlewares/id-parser.js');

router.get('/', InputController.getAllInputs);
router.get('/:id', idParser, InputController.getInputById);
router.get('/formulaire/:id', idParser, InputController.getInputByFormulaireId);
router.post('/', authenticated(),InputController.createInput);
router.put('/:id', idParser, authenticated(),InputController.updateInput);
router.delete('/:id', idParser, authenticated(),InputController.deleteInput);

module.exports = router;