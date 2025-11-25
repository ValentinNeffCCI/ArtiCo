import express from 'express';

// controller
import userController from "../controllers/user-controller.js";

// middleware
import authenticated from "../middlewares/authenticated.js";

const router = express.Router();

router.use(authenticated(true));

router.get('/', userController.getAllUsers);

export default router;