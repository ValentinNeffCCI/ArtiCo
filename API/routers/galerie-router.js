const express = require('express');
const router = express.Router();
const GalerieController = require('../controllers/galerie-controller.js');
const authenticated = require('../middlewares/authenticated.js');
const idParser = require('../middlewares/id-parser.js');
const upload = require('../middlewares/image-uploader.js');
const verifyAccessGalerie = require('../middlewares/galerie-verification.js');

router.get('/:id', idParser, GalerieController.getGalerieById);
router.get('/entreprise/:id', idParser, GalerieController.getGalerieByEntrepriseId);
router.post('/', authenticated(), verifyAccessGalerie, upload.single("photo"),GalerieController.createGalerie);
router.delete('/:id', idParser, authenticated(), verifyAccessGalerie, GalerieController.deleteGalerie);

module.exports = router;