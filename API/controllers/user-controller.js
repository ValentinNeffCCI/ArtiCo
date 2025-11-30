const userService = require("../services/user-service.js");

module.exports = {
    getAllUsers: (req, res, next) => {
        try {
            const users = userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            next(err);
        }
    }
}