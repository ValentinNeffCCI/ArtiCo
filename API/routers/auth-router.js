const express = require("express");
const AuthController = require("../controllers/auth-controller.js");
const authenticate = require("../middlewares/authenticated.js");
const fieldVerification = require("../middlewares/field-verification.js");
const autoHashingPassword = require("../middlewares/auto-hashing-password.js");
const emailFormatVerification = require("../middlewares/email-format-verification.js");

const router = express.Router();

router.post('/login', fieldVerification(['email', 'password']), AuthController.login);
router.post('/register', fieldVerification(['email', 'password', 'name']), autoHashingPassword, emailFormatVerification, AuthController.register);
router.post('/reset-password', authenticate(), fieldVerification(['password']), autoHashingPassword, AuthController.reset);

module.exports = router;