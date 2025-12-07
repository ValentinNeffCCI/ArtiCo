const userRepository = require("../repositories/user-repository.js");
const userResource = require("../resources/user-resource.js");
const userCollectionResource = require("../resources/collections/user-collection-resource.js");
const HttpError = require("../customclasses/HttpError.js");

module.exports = {
    getAllUsers: async () => {
        return userCollectionResource(await userRepository.findAll());
    },
    getUserById: async (id) => {
        return userResource(await userRepository.findById(id));
    },
    banUser: async (id) => {
        return userResource(await userRepository.update(id, { active: false }));
    },
    updateUser: async (id, data) => {
        const isEmailTaken = await userRepository.findByEmail(data.email);
        if (isEmailTaken && isEmailTaken.id != id) {
            throw new HttpError("Email déjà utilisé", 409);
        }
        const nameTaken = await userRepository.findByName(data.name);
        if (nameTaken && nameTaken.id != id) {
            throw new HttpError("Nom déjà utilisé", 409);
        }
        return userResource(await userRepository.update(id, data));
    },
    deleteUser: async (id) => {
        return userResource(await userRepository.delete(id));
    }
}