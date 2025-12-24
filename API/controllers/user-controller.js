const userService = require("../services/user-service.js");

module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    },
    getMe: async (req, res, next) => {
        try {
            const user = await userService.getUserById(req.user.id);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    },
    getUserById: async (req, res, next) => {
        try {
            const user = await userService.getUserById(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    },
    updateUser: async (req, res, next) => {
        try {
            const user = await userService.updateUser(req.params.id, req.body);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    },
    deleteUser: async (req, res, next) => {
        try {
            const user = await userService.deleteUser(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    },
    modifyUserAccess: async (req, res, next) => {
        try {
            const user = await userService.modifyUserAccess(req.params.id, req.body);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    },
    getAllUsersWithAccess: async (req, res, next) => {
        try {
            const users = await userService.getAllUsersWithAccess();
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    }
}