const UserRepository = require("../repositories/user-repository.js");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const HttpError = require("../customclasses/HttpError.js");

const fs = require("fs");
const mailer = require("../utils/mailer.js");

dotenv.config();

// env consts
const access_expiracy = process.env.ACCESS_EXPIRACY;
const refresh_expiracy = process.env.REFRESH_EXPIRACY;
const SECRET = process.env.SECRET_KEY;
const REFRESH_KEY = process.env.REFRESH_KEY;
const RESET_KEY = process.env.RESET_KEY;

module.exports = {
  login: async (email, password) => {
    const user = await UserRepository.findByEmail(email, true);
    if (!user) throw new HttpError("Aucun utilisateur trouvé", 404);
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new HttpError("Mot de passe incorrect", 403);
    if (!user.active)
      throw new HttpError("Ce compte est momentanément indisponible", 403);
    const token = jwt.sign({ id: user.id }, SECRET, {
      expiresIn: access_expiracy,
    });
    const refresh = jwt.sign({ id: user.id }, REFRESH_KEY, {
      expiresIn: refresh_expiracy,
    });
    await UserRepository.update(user.id, { refresh_token: refresh });
    return {
      id: user.id,
      role: user.role,
      token,
      refresh,
    };
  },
  register: async (email, password, name) => {
    const testmail = await UserRepository.findByEmail(email);
    if (testmail) throw new HttpError("Cet email est déjà utilisé", 409);
    const testname = await UserRepository.findByName(name);
    if (testname) throw new HttpError("Ce nom est déjà utilisé", 409);
    const insertedUser = await UserRepository.create(email, password, name);
    const refresh = jwt.sign({ id: insertedUser.id }, REFRESH_KEY, {
      expiresIn: refresh_expiracy,
    });
    await UserRepository.update(insertedUser.id, { refresh_token: refresh });
    const token = jwt.sign(
      { id: insertedUser.id, role: insertedUser.role },
      SECRET,
      { expiresIn: access_expiracy }
    );
    return {
      id: insertedUser.id,
      role: insertedUser.role,
      token,
      refresh,
    };
  },
  reset: async (token, password) => {

    const id = jwt.verify(token, RESET_KEY, (err, decoded) => {
        if(err) throw new HttpError(`Ce lien n'est plus à jour`)
        return decoded.id
    });
    const user = await UserRepository.findById(id);

    if (!user) throw new HttpError("Aucun utilisateur trouvé", 404);
    if (!user.reset_token || user.reset_token !== token) throw new HttpError(
        "Aucune demande réinitialisation de mot de passe",
        403
    );

    const refresh = jwt.sign({ id }, REFRESH_KEY, {
      expiresIn: refresh_expiracy,
    });

    await UserRepository.update(id, {
      password,
      refresh_token: refresh,
      reset_token: null,
    });

    const accesstoken = jwt.sign(
      { id, role: user.role },
      SECRET,
      { expiresIn: access_expiracy }
    );

    return {
      id,
      role: user.role,
      token: accesstoken,
      refresh,
    };
  },
  refresh: async (iduser, token) => {
    const user = await UserRepository.findById(iduser);
    if (!user) {
      throw new HttpError("Utilisateur non trouvé", 404);
    }
    if (user.refresh_token !== token) {
      throw new HttpError("Session expirée", 401);
    } else {
      return jwt.sign({ id: user.id }, SECRET, { expiresIn: access_expiracy });
    }
  },
  forgotPassword: async (email) => {
    const user = await UserRepository.findByEmail(email);
    if (!user) {
      throw new HttpError("Pas d'utilisateur associé à cet email");
    }
    const token = jwt.sign({ id: user.id }, RESET_KEY, {
      expiresIn: access_expiracy,
    });

    await UserRepository.update(user.id, {
      reset_token: token,
    });

    const template = fs.readFileSync("./templates/mails/password_oublie.html", {
      encoding: "utf-8",
    });
    let content = template.replace("{username}", user.name);
    content = content.replace(
      "{url}",
      `${process.env.FRONTEND_URL}/reinitialiser-mot-de-passe?token=${token}`
    );

    const message = {
      from: process.env.APP_EMAIL,
      to: user.email,
      subject: "Mot de passe oublié",
      html: content,
    };

    try {
      await mailer.sendMail(message);
      return true;
    } catch (error) {
      throw new HttpError(`Erreur lors de l'envoi de mail`, 500);
    }
    // envoi mail
  },
};
