const userService = require("../services/user-service.js");

module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            const users = await userService.getAllUsers();
            return res.status(200).json(users);
        } catch (error) {
            return next(error);
        }
    },
    getMe: async (req, res, next) => {
        try {
            const user = await userService.getUserById(req.user.id);
            return res.status(200).json(user);
        } catch (error) {
            return next(error);
        }
    },
    getUserById: async (req, res, next) => {
        try {
            const user = await userService.getUserById(req.params.id);
            return res.status(200).json(user);
        } catch (error) {
            return next(error);
        }
    },
    updateUser: async (req, res, next) => {
        try {
            const user = await userService.updateUser(req.params.id, req.body);
            return res.status(200).json(user);
        } catch (error) {
            return next(error);
        }
    },
    deleteUser: async (req, res, next) => {
        try {
            const user = await userService.deleteUser(req.params.id);
            return res.status(200).json(user);
        } catch (error) {
            return next(error);
        }
    },
    modifyUserAccess: async (req, res, next) => {
        try {
            const user = await userService.modifyUserAccess(req.params.id, req.body);
            return res.status(200).json(user);
        } catch (error) {
            return next(error);
        }
    },
    getAllUsersWithAccess: async (req, res, next) => {
        try {
            const users = await userService.getAllUsersWithAccess();
            return res.status(200).json(users);
        } catch (error) {
            return next(error);
        }
    }
}