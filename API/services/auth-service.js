const UserRepository = require("../repositories/user-repository.js");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const expiracy = require("../constants/expiracy.js");
const bcrypt = require("bcrypt");
const HttpError = require("../customclasses/HttpError.js");
dotenv.config();
const SECRET = process.env.SECRET_KEY;

module.exports = {
    login: async (email, password) => {
        const user = await UserRepository.findByEmail(email, true);
        if (!user) throw new HttpError("Aucun utilisateur trouvé", 404);
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) throw new HttpError("Mot de passe invalide", 401);
        if(!user.active) throw new HttpError("Ce compte est momentanément indisponible", 403);
        const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: expiracy });
        return {
            id: user.id,
            role: user.role,
            token
        }
    },
    register: async (email, password, name) => {
        const testmail = await UserRepository.findByEmail(email);
        if (testmail) throw new HttpError("Cet email est déjà utilisé", 409);
        const testname = await UserRepository.findByName(name);
        if (testname) throw new HttpError("Ce nom est déjà utilisé", 409);

        password = await bcrypt.hash(password, 10);
        const insertedUser = await UserRepository.create(email, password, name);
        const token = jwt.sign({ id: insertedUser.id, role: insertedUser.role }, SECRET, { expiresIn: expiracy });
        return { 
            id: insertedUser.id,
            role: insertedUser.role,
            token
        };
    },
    reset: async (password, id) => {
        const user = await UserRepository.findById(id);
        if (!user) throw new HttpError("Aucun utilisateur trouvé", 404);
        password = await bcrypt.hash(password, 10);
        const updatedUser = await UserRepository.update(id, {password});
        const token = jwt.sign({ id: updatedUser.id, role: updatedUser.role }, SECRET, { expiresIn: expiracy });
        return { 
            id: updatedUser.id,
            role: updatedUser.role,
            token
        };
    },
};
