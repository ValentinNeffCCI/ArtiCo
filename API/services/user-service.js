const userRepository = require("../repositories/user-repository.js");

module.exports = {
    getAllUsers: async () => {
        return await userRepository.findAll();
    },
    getUserById: async (id) => {
        return await userRepository.findById(id);
    },
    banUser: async (id) => {
        return await userRepository.update(id, { active: false });
    },
    updateUser: async (id, data) => {
        return await userRepository.update(id, data);
    },
    deleteUser: async (id) => {
        return await userRepository.delete(id);
    }
}