const AuthService = require("../services/auth-service.js");
const HttpError = require("../customclasses/HttpError.js");

module.exports = {
    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const user = await AuthService.login(email, password)
            return res.status(200).json(user);
        } catch (error) {
            console.log(error)
            return next(new HttpError(error.message || "Erreur lors de la connexion", error.status || 500));
        }
    },
    register: async (req, res, next) => {
        try {
            const { email, password, name } = req.body;
            const user = await AuthService.register(email, password, name);
            return res.status(200).json(user);
        } catch (error) {
            return next(new HttpError(error.message || "Erreur lors de la création du compte", error.status || 500));
        }
    },
    reset: async (req, res, next) => {
        try {
            const { password } = req.body;
            const user = req.user;
            const reset_user = await AuthService.reset(password, user.id);
            return res.status(reset_user ? 200 : 409).json(reset_user);
        } catch (error) {
            return next(new HttpError(error.message || "Erreur lors de la mise à jour du mot de passe", error.status || 500));
        }
    }
}