const userRepository = require("../repositories/user-repository.js");

module.exports = {
    getAllUsers: () => {
        return userRepository.findAll();
    }
}