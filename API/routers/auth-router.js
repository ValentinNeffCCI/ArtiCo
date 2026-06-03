const express = require("express");
const AuthController = require("../controllers/auth-controller.js");
const fieldVerification = require("../middlewares/field-verification.js");
const refreshMiddleware = require("../middlewares/refreshMiddleware.js");
const autoHashingPassword = require("../middlewares/auto-hashing-password.js");
const validate = require("../middlewares/validate.js");
const registerSchema = require('../schemas/Auth/registerSchema.js')
const loginSchema = require('../schemas/Auth/loginSchema.js')
const authenticated = require('../middlewares/authenticated.js');

const router = express.Router();

router.post('/login', validate(loginSchema), AuthController.login);
router.post('/register', validate(registerSchema), autoHashingPassword, AuthController.register);
router.post('/forgot-password', fieldVerification(['email']), AuthController.forgotPassword);
router.post('/change-password', fieldVerification(['password']), autoHashingPassword, AuthController.reset);
router.get('/refresh', refreshMiddleware, AuthController.refresh);
router.post('/logout', authenticated(), AuthController.logout);

module.exports = router;