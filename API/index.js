// libs
import dotenv from "dotenv";
import express from "express";
import jwt from "jsonwebtoken";

// routers
import entrepriseRouter from "./routers/entreprise-router.js";
import userRouter from "./routers/user-router.js";

// middlewares
import authenticated from "./middlewares/authenticated.js";

import AuthService from "./services/AuthService.js";
import errorMiddleware from "./middlewares/error-middleware.js";
import { HttpError } from "./customclasses/HttpError.js";

// .env
dotenv.config();

const app = express();
app.use(express.json());

const SECRET = process.env.SECRET_KEY;
const PORT = process.env.PORT || 3000;

app.get('/', (req,res, next)=>{
    next(new HttpError("Test", 400));
})

// Ajout des prefix
app.use("/users", userRouter);
app.use("/entreprises", entrepriseRouter);

// Region routes publiques
app.post('/login', (req, res) => {
    try {
        const user = AuthService.login(req.body)
        return res.status(200).json(jwt.sign(user, SECRET, {expiresIn: '2h'}));
    } catch (error) {
        return res.status(401).send();
    }
});
app.post('/register', (req, res) => {
    try {
        const user = AuthService.register(req.body);
        return res.status(user ? 200 : 409).json(jwt.sign(user, SECRET, {expiresIn: "2h"}));
    } catch (error) {
        return res.status(400).send();
    }
});

app.use(errorMiddleware);

// TODO: login, register, CRUDs, password-reset, upload fichiers, connexion pg/mongoDb

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
