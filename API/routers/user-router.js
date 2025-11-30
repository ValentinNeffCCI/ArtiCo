const express = require('express');

// controller
const userController = require("../controllers/user-controller.js");

// middleware
const authenticated = require("../middlewares/authenticated.js");

const router = express.Router();

router.use(authenticated(true));

router.get('/', userController.getAllUsers);

module.exports = router;