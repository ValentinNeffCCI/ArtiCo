import userRepository from "../repositories/user-repository.js";

export default {
    getAllUsers: ()=> {
        return userRepository.findAll();
    }
}