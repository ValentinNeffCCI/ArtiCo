const express = require('express');

// controller
const userController = require("../controllers/user-controller.js");

// middleware
const userAccess = require("../middlewares/user-access.js");
const authenticated = require("../middlewares/authenticated.js");
const autoHashingPassword = require("../middlewares/auto-hashing-password.js");
const idParser = require("../middlewares/id-parser.js");
const emailFormatVerification = require("../middlewares/email-format-verification.js");
const router = express.Router();

router.get('/', authenticated(true),userController.getAllUsers);
router.get('/me', authenticated(),userController.getMe);
router.get('/:id', idParser, authenticated(true),userController.getUserById);
router.put('/:id', idParser, authenticated(), userAccess, autoHashingPassword, emailFormatVerification, userController.updateUser);
router.delete('/:id', idParser, authenticated(), userAccess, userController.deleteUser);
router.put('/admin/:id', idParser, authenticated(true),userController.modifyUserAccess);
router.get('/admin', authenticated(true),userController.getAllUsersWithAccess);

module.exports = router;