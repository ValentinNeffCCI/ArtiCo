const AuthService = require("../services/auth-service.js");
const HttpError = require("../customclasses/HttpError.js");

module.exports = {
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await AuthService.login(email, password);
      res.cookie("artico_token", user.token, {
        httpOnly: true,
        sameSite: "none",
        // http bug
        secure: process.env.NODE_ENV == "production",
      });
      res.cookie("refresh_token", user.refresh, {
        httpOnly: true,
        sameSite: "none",
        // http bug
        secure: process.env.NODE_ENV == "production",
        expires: new Date(Date.now() + 7 * 24 * 3600 * 1000),
      });
      return res.status(200).json({
        role: user.role,
        id: user.id
      });
    } catch (error) {
      return next(
        new HttpError(
          error.message || "Erreur lors de la connexion",
          error.status || 500
        )
      );
    }
  },
  register: async (req, res, next) => {
    try {
      const { email, password, name } = req.body;
      const user = await AuthService.register(email, password, name);
      res.cookie("artico_token", user.token, {
        httpOnly: true,
        sameSite: "none",
        // http bug
        secure: process.env.NODE_ENV == "production",
      });
      res.cookie("refresh_token", user.refresh, {
        httpOnly: true,
        sameSite: "none",
        // http bug
        secure: process.env.NODE_ENV == "production",
        expires: new Date(Date.now() + 7 * 24 * 3600 * 1000),
      });
      return res.status(200).json({
        role: user.role,
        id: user.id
      });
    } catch (error) {
      return next(
        new HttpError(
          error.message || "Erreur lors de la création du compte",
          error.status || 500
        )
      );
    }
  },
  reset: async (req, res, next) => {
    try {
      const { password } = req.body;
      const user = await AuthService.reset(req.body.token, password);
      res.cookie("artico_token", user.token, {
        httpOnly: true,
        sameSite: "none",
        // http bug
        secure: process.env.NODE_ENV == "production",
      });
      res.cookie("refresh_token", user.refresh, {
        httpOnly: true,
        sameSite: "none",
        // http bug
        secure: process.env.NODE_ENV == "production",
        expires: new Date(Date.now() + 7 * 24 * 3600 * 1000),
      });
      return res.status(200).json({
        role: user.role,
        id: user.id
      });
    } catch (error) {
      return next(
        new HttpError(
          error.message || "Erreur lors de la mise à jour du mot de passe",
          error.status || 500
        )
      );
    }
  },
  refresh: async (req, res, next) => {
    try {
      const token = await AuthService.refresh(req.user.id, req.token);
      if (token) {
        res.cookie("artico_token", token, {
          httpOnly: true,
          sameSite: "none",
          // http bug
          secure: process.env.NODE_ENV == "production",
        });
        return res.status(200).send({
          token,
        });
      } else {
        return res.status(400).send();
      }
    } catch (error) {
      return next(
        error instanceof HttpError ? error : new HttpError(error.message, 500)
      );
    }
  },
  forgotPassword: async (req, res, next) => {
    try {
      await AuthService.forgotPassword(req.body.email);
      return res.status(204).send()
    } catch (error) {
      return next(
        error instanceof HttpError ? error : new HttpError(error.message, 500)
      );
    }
  }
};
