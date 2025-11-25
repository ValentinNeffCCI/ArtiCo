import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export default (superAuth = false) => (req, res, next) => {
    const authHeader = req.headers["authorization"];

    if(!authHeader) {
        res.status(401).send();
    }

    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.status(401).send();

    const SECRET = process.env.SECRET_KEY;

    jwt.verify(token, SECRET, (err, user) => {
        if (err) return res.status(403).send();

        // todo: rechercher l'user en db et vérifier les accès
        // user = getUserById...;

        if(!user) return res.status(401).send();

        req.user = user;

        if (superAuth && (!user.role || user.role !== "admin")) {
            return res.status(403).json(user);
        }

        next();
    });
};