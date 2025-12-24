const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const UserRepository = require("../repositories/user-repository");

dotenv.config();

const expiredLabel = "Session expirée, veuillez vous reconnecter";
const invalidLabel = "Session invalide, veuillez vous reconnecter";

module.exports = (superAuth = false) => (req, res, next) => {
    // const authHeader = req.headers["authorization"];
    // if (!authHeader) {
    //     return res.status(401).json({
    //         error: expiredLabel + " : Pas de token"
    //     });
    // }
    // const token = authHeader && authHeader.split(" ")[1];

    const token = req.cookies.artico_token;
    if(!token) {
        return res.status(401).send();
    }

    if (!token) return res.status(401).json({
        error: expiredLabel + " : Pas de token"
    });
    const SECRET = process.env.SECRET_KEY;

    jwt.verify(token, SECRET, async (err, user) => {
        if (err) return res.status(401).json({
            error: invalidLabel + " : Token invalide"
        });

        // user = getUserById...;
        user = await UserRepository.findById(user.id);
        if (!user) return res.status(401).json({
            error: invalidLabel + " : Utilisateur non trouvé"
        });

        req.user = user;

        if (superAuth && (!user.role || user.role !== "ADMIN")) {
            return res.status(403).json({
                error: "Accès non autorisé : Utilisateur non autorisé"
            });
        }

        next();
    });
};