const express = require('express');
const router = express.Router();
const OptionController = require('../controllers/options-controller.js');
const authenticated = require('../middlewares/authenticated.js');

router.get('/', OptionController.getAllOptions);
router.get('/:id', OptionController.getOptionById);
router.get('/input/:id', OptionController.getOptionByInputId);
router.post('/', authenticated(),OptionController.createOption);
router.put('/:id', authenticated(),OptionController.updateOption);
router.delete('/:id', authenticated(),OptionController.deleteOption);

module.exports = router;