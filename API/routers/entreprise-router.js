const express = require('express');
const router = express.Router();
const authenticated = require('../middlewares/authenticated.js');
const entrepriseController = require('../controllers/entreprise-controller.js');
const idParser = require('../middlewares/id-parser.js');
const imageUploader = require('../middlewares/image-uploader.js');
const fieldVerification = require('../middlewares/field-verification.js');
const emailFormatVerification = require('../middlewares/email-format-verification.js');
const entrepriseFields = ['name', 'description', 'name', 'address1', 'city', 'cp', 'email', 'categorieId'];

router.get('/',
    entrepriseController.getAllEntreprises);
router.get('/:id', 
    idParser, 
    entrepriseController.getEntrepriseById);
router.get('/user/:id', 
    idParser, 
    authenticated(),
    entrepriseController.getEntreprisesByUserId);
router.post('/', 
    authenticated(), 
    imageUploader.single('image'), 
    fieldVerification(entrepriseFields), 
    emailFormatVerification,
    entrepriseController.createEntreprise);
router.put('/:id', 
    idParser, 
    authenticated(), 
    imageUploader.single('image'), 
    fieldVerification(entrepriseFields), 
    emailFormatVerification,
    entrepriseController.updateEntreprise);
router.delete('/:id', 
    idParser, 
    authenticated(), 
    entrepriseController.deleteEntreprise);

module.exports = router;