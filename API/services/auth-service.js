const UserRepository = require("../repositories/user-repository.js");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const HttpError = require("../customclasses/HttpError.js");
dotenv.config();
const access_expiracy = process.env.ACCESS_EXPIRACY;
const refresh_expiracy = process.env.REFRESH_EXPIRACY;
const SECRET = process.env.SECRET_KEY;
const REFRESH_KEY = process.env.REFRESH_KEY

module.exports = {
    login: async (email, password) => {
        const user = await UserRepository.findByEmail(email, true);
        if (!user) throw new HttpError("Aucun utilisateur trouvé", 404);
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) throw new HttpError("Mot de passe invalide", 401);
        if(!user.active) throw new HttpError("Ce compte est momentanément indisponible", 403);
        const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: access_expiracy });
        const refresh = jwt.sign({ id: user.id }, REFRESH_KEY, { expiresIn: refresh_expiracy });
        await UserRepository.update(user.id, {refresh_token: refresh})
        return {
            id: user.id,
            role: user.role,
            token,
            refresh
        }
    },
    register: async (email, password, name) => {
        const testmail = await UserRepository.findByEmail(email);
        if (testmail) throw new HttpError("Cet email est déjà utilisé", 409);
        const testname = await UserRepository.findByName(name);
        if (testname) throw new HttpError("Ce nom est déjà utilisé", 409);
        const insertedUser = await UserRepository.create(email, password, name);
        const refresh = jwt.sign({ id: user.id }, REFRESH_KEY, { expiresIn: refresh_expiracy });
        await UserRepository.update(insertedUser.id, {refresh_token: refresh})
        const token = jwt.sign({ id: insertedUser.id, role: insertedUser.role }, SECRET, { expiresIn: access_expiracy });
        return { 
            id: insertedUser.id,
            role: insertedUser.role,
            token,
            refresh
        };
    },
    reset: async (password, id) => {
        const user = await UserRepository.findById(id);
        if (!user) throw new HttpError("Aucun utilisateur trouvé", 404);
        const refresh = jwt.sign({ id: user.id }, REFRESH_KEY, { expiresIn: refresh_expiracy });
        const updatedUser = await UserRepository.update(id, {password, refresh_token: refresh});
        const token = jwt.sign({ id: updatedUser.id, role: updatedUser.role }, SECRET, { expiresIn: access_expiracy });
        return { 
            id: updatedUser.id,
            role: updatedUser.role,
            token,
            refresh
        };
    },
    refresh: async (iduser, token) => {
        const user = await UserRepository.findById(iduser);
        if(!user){
            throw new HttpError("Utilisateur non trouvé", 404);
        }
        if(user.refresh_token !== token) {
            throw new HttpError('Session expirée', 401)
        } else {
            return jwt.sign({id: user.id}, SECRET, {expiresIn: access_expiracy});
        }
        
    }
};
