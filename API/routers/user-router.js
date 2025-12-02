const express = require('express');

// controller
const userController = require("../controllers/user-controller.js");

// middleware
const userAccess = require("../middlewares/user-access.js");
const authenticated = require("../middlewares/authenticated.js");
const autoHashingPassword = require("../middlewares/auto-hashing-password.js");

const router = express.Router();

router.get('/', authenticated(true),userController.getAllUsers);
router.get('/me', authenticated(),userController.getMe);
router.get('/:id', authenticated(true),userController.getUserById);
router.put('/:id', authenticated(), userAccess, autoHashingPassword, userController.updateUser);
router.delete('/:id', authenticated(), userAccess, userController.deleteUser);
router.post('/ban/:id', authenticated(true),userController.banUser);

module.exports = router;