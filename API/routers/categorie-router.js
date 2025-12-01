const express = require('express');
const router = express.Router();
const CategorieController = require('../controllers/categorie-controller.js');
const authenticated = require('../middlewares/authenticated.js');

router.get('/', CategorieController.getAllCategories);
router.get('/:id', CategorieController.getCategorieById);
router.post('/', authenticated(true),CategorieController.createCategorie);
router.put('/:id', authenticated(true),CategorieController.updateCategorie);
router.delete('/:id', authenticated(true),CategorieController.deleteCategorie);

module.exports = router;