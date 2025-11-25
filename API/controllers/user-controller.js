import userService from "../services/user-service.js";

export default {
    getAllUsers: (req, res, next)=>{
        try{
            const users = userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            next(err);
        }
    }
}