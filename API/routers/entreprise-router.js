const express = require('express');
const router = express.Router();
const authenticated = require('../middlewares/authenticated.js');
const entrepriseController = require('../controllers/entreprise-controller.js');
const idParser = require('../middlewares/id-parser.js');
const imageUploader = require('../middlewares/image-uploader.js');
const verifyAccessEntreprise = require('../middlewares/entreprise-access.js');
const validate = require('../middlewares/validate.js');
const entrepriseCreateSchema = require('../schemas/Entreprise/entrepriseCreateSchema.js');
const entrepriseUpdateSchema = require('../schemas/Entreprise/entrepriseUpdateSchema.js');

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
    validate(entrepriseCreateSchema),
    entrepriseController.createEntreprise);
router.put('/:id',
    idParser,
    authenticated(),
    imageUploader.single('image'),
    validate(entrepriseUpdateSchema),
    verifyAccessEntreprise,
    entrepriseController.updateEntreprise);
router.delete('/:id', 
    idParser, 
    authenticated(), 
    verifyAccessEntreprise,
    entrepriseController.deleteEntreprise);

module.exports = router;