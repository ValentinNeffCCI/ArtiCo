const userRepository = require("../repositories/user-repository.js");
const userResource = require("../resources/user-resource.js");
const userCollectionResource = require("../resources/collections/user-collection-resource.js");
const bcrypt = require("bcrypt");

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
        return userResource(await userRepository.update(id, data));
    },
    deleteUser: async (id) => {
        return userResource(await userRepository.delete(id));
    }
}