const express = require("express");
const AuthController = require("../controllers/auth-controller.js");
const fieldVerification = require("../middlewares/field-verification.js");
const refreshMiddleware = require("../middlewares/refreshMiddleware.js");
const autoHashingPassword = require("../middlewares/auto-hashing-password.js");
const emailFormatVerification = require("../middlewares/email-format-verification.js");
const { checkSchema } = require("express-validator");
const registerSchema = require('../schemas/Auth/registerSchema.js')

const router = express.Router();

router.post('/login', fieldVerification(['email', 'password']), AuthController.login);
router.post('/register', fieldVerification(['email', 'password', 'name']), checkSchema(registerSchema), autoHashingPassword, emailFormatVerification, AuthController.register);
router.post('/forgot-password', fieldVerification(['email']), AuthController.forgotPassword);
router.post('/change-password', fieldVerification(['password']), autoHashingPassword, AuthController.reset);
router.get('/refresh', refreshMiddleware, AuthController.refresh);

module.exports = router;