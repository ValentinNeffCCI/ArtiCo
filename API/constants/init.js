const dotenv = require("dotenv");
const authService = require("../services/auth-service.js");
const userRepository = require("../repositories/user-repository");
const bcrypt = require("bcrypt");
dotenv.config();

const initDB = async () => {
    const {OWNER_EMAIL, OWNER_PASSWORD, OWNER_NAME} = process.env;
    try {
        const data = await authService.register(OWNER_EMAIL, OWNER_PASSWORD, OWNER_NAME);
    } catch (error) {
        if(error.status === 409) {
            const imposter = await userRepository.findByEmail(OWNER_EMAIL);
            // Si un petit malin essaie de se connecter à la place du propriétaire ou si le propriétaire est supprimé
            await userRepository.update(imposter.id, { role: "ADMIN", email: OWNER_EMAIL, password: bcrypt.hashSync(OWNER_PASSWORD, 10), name: OWNER_NAME });
        }
    }
}

module.exports = initDB;