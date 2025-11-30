const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const UserRepository = require("../repositories/user-repository");

dotenv.config();

module.exports = (superAuth = false) => (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        res.status(401).send();
    }

    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.status(401).send();
    const SECRET = process.env.SECRET_KEY;

    jwt.verify(token, SECRET, async (err, user) => {
        if (err) return res.status(403).send();

        // user = getUserById...;
        user = await UserRepository.findById(user.id);
        if (!user) return res.status(401).send();

        req.user = user;

        if (superAuth && (!user.role || user.role !== "ADMIN")) {
            return res.status(403).json(user);
        }

        next();
    });
};