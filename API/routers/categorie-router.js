const express = require('express');
const router = express.Router();
const CategorieController = require('../controllers/categorie-controller.js');
const authenticated = require('../middlewares/authenticated.js');
const idParser = require('../middlewares/id-parser.js');
const validate = require('../middlewares/validate.js');
const categorieCreateSchema = require('../schemas/Categorie/categorieCreateSchema.js');
const categorieUpdateSchema = require('../schemas/Categorie/categorieUpdateSchema.js');

router.get('/', CategorieController.getAllCategories);
router.get('/:id', idParser, CategorieController.getCategorieById);
router.post('/', authenticated(true), validate(categorieCreateSchema), CategorieController.createCategorie);
router.put('/:id', idParser, authenticated(true), validate(categorieUpdateSchema), CategorieController.updateCategorie);
router.delete('/:id', idParser, authenticated(true),CategorieController.deleteCategorie);

module.exports = router;