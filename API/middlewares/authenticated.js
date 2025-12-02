const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const UserRepository = require("../repositories/user-repository");

dotenv.config();

const expiredLabel = "Session expirée, veuillez vous reconnecter";
const invalidLabel = "Session invalide, veuillez vous reconnecter";

module.exports = (superAuth = false) => (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        res.status(401).json({
            error: expiredLabel
        });
    }

    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.status(401).json({
        error: expiredLabel
    });
    const SECRET = process.env.SECRET_KEY;

    jwt.verify(token, SECRET, async (err, user) => {
        if (err) return res.status(401).json({
            error: invalidLabel
        });

        // user = getUserById...;
        user = await UserRepository.findById(user.id);
        if (!user) return res.status(401).json({
            error: invalidLabel
        });

        req.user = user;

        if (superAuth && (!user.role || user.role !== "ADMIN")) {
            return res.status(403).json({
                error: "Accès non autorisé"
            });
        }

        next();
    });
};