const express = require('express');
const router = express.Router();
const InputController = require('../controllers/input-controller.js');
const authenticated = require('../middlewares/authenticated.js');

router.get('/', InputController.getAllInputs);
router.get('/:id', InputController.getInputById);
router.get('/formulaire/:id', InputController.getInputByFormulaireId);
router.post('/', authenticated(),InputController.createInput);
router.put('/:id', authenticated(),InputController.updateInput);
router.delete('/:id', authenticated(),InputController.deleteInput);

module.exports = router;