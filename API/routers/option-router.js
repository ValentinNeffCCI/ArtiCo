const express = require('express');
const router = express.Router();
const OptionController = require('../controllers/options-controller.js');
const authenticated = require('../middlewares/authenticated.js');
const idParser = require('../middlewares/id-parser.js');

router.get('/', OptionController.getAllOptions);
router.get('/:id', idParser, OptionController.getOptionById);
router.get('/input/:id', idParser, OptionController.getOptionByInputId);
router.post('/', authenticated(),OptionController.createOption);
router.put('/:id', idParser, authenticated(),OptionController.updateOption);
router.delete('/:id', idParser, authenticated(),OptionController.deleteOption);

module.exports = router;