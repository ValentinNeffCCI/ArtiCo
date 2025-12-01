const express = require('express');

// controller
const userController = require("../controllers/user-controller.js");

// middleware
const authenticated = require("../middlewares/authenticated.js");

const router = express.Router();

router.get('/', authenticated(true),userController.getAllUsers);
router.get('/me', authenticated(),userController.getMe);
router.get('/:id', authenticated(true),userController.getUserById);
router.put('/:id', authenticated(),userController.updateUser);
router.delete('/:id', authenticated(),userController.deleteUser);
router.post('/ban/:id', authenticated(true),userController.banUser);

module.exports = router;