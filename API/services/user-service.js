const userRepository = require("../repositories/user-repository.js");
const userResource = require("../resources/user-resource.js");
const userCollectionResource = require("../resources/collections/user-collection-resource.js");
const HttpError = require("../customclasses/HttpError.js");

module.exports = {
    getAllUsers: async () => {
        return userCollectionResource(await userRepository.findAll());
    },
    getAllUsersWithAccess: async () => {
        return userCollectionResource(await userRepository.findAllWithAccess());
    },
    getUserById: async (id) => {
        return userResource(await userRepository.findById(id));
    },
    modifyUserAccess: async (id, data) => {
        return userResource(await userRepository.update(id, data));
    },
    updateUser: async (id, data) => {
        if(data.email){
            const isEmailTaken = await userRepository.findByEmail(data.email);
            if (isEmailTaken && isEmailTaken.id != id) {
                throw new HttpError("Email déjà utilisé", 409);
            }
        }
        if(data.name){
            const nameTaken = await userRepository.findByName(data.name);
            if (nameTaken && nameTaken.id != id) {
                throw new HttpError("Nom déjà utilisé", 409);
            }
        }
        return userResource(await userRepository.update(id, data));
    },
    deleteUser: async (id) => {
        return userResource(await userRepository.delete(id));
    }
}