const express = require('express');
const router = express.Router();
const CategorieController = require('../controllers/categorie-controller.js');
const authenticated = require('../middlewares/authenticated.js');
const idParser = require('../middlewares/id-parser.js');

router.get('/', CategorieController.getAllCategories);
router.get('/:id', idParser, CategorieController.getCategorieById);
router.post('/', authenticated(true),CategorieController.createCategorie);
router.put('/:id', idParser, authenticated(true),CategorieController.updateCategorie);
router.delete('/:id', idParser, authenticated(true),CategorieController.deleteCategorie);

module.exports = router;