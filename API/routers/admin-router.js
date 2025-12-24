const express = require('express');
const userController = require('../controllers/user-controller');
const entrepriseController = require('../controllers/entreprise-controller');
const router = express.Router();
const authenticate = require('../middlewares/authenticated.js');
const idParser = require('../middlewares/id-parser.js');

router.get('/users', authenticate(true), idParser, userController.getAllUsersWithAccess);
router.get('/entreprises', authenticate(true), idParser, entrepriseController.getAllEntreprises);

router.put('/user/:id', authenticate(true), idParser, userController.modifyUserAccess);

module.exports = router;