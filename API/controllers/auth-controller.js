import { expiracy } from "../constants/expiracy.js";
import AuthService from "../services/auth-service.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET = process.env.SECRET;

export default {
    login: async (req, res, next) => {
        try {
            const user = await AuthService.login(req.body)
            return res.status(200).json(jwt.sign(user, SECRET, { expiresIn: expiracy }));
        } catch (error) {
            return next(error);
        }
    },
    register: async (req, res, next) => {
        try {
            const user = await AuthService.register(req.body);
            return res.status(user ? 200 : 409).json(jwt.sign(user, SECRET, { expiresIn: expiracy }));
        } catch (error) {
            return next(error);
        }
    },
    reset: async (req, res, next) => {
        try {
            const user = await AuthService.reset(req.body);
            return res.status(user ? 200 : 409).json(jwt.sign(user, SECRET, { expiresIn: expiracy }));
        } catch (error) {
            return next(error);
        }
    }
}