const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const UserRepository = require("../repositories/user-repository");

dotenv.config();

const expiredLabel = "Session expirée, veuillez vous reconnecter";
const invalidLabel = "Session invalide, veuillez vous reconnecter";

module.exports = (superAuth = false) => async (req, res, next) => {
    try {
        const token = req.cookies.artico_token;
        
        if (!token) {
            return res.status(401).json({
                error: expiredLabel + " : Pas de token"
            });
        }
        
        const SECRET = process.env.SECRET_KEY;

        let decoded;
        try {
            decoded = jwt.verify(token, SECRET);
        } catch (err) {
            return res.status(401).json({
                error: invalidLabel + " : Token invalide"
            });
        }

        const user = await UserRepository.findById(decoded.id);
        if (!user) {
            return res.status(401).json({
                error: invalidLabel + " : Utilisateur non trouvé"
            });
        }


        req.user = user;

        if (superAuth && (!user.role || user.role !== "ADMIN")) {
            return res.status(403).json({
                error: "Accès non autorisé : Utilisateur non autorisé"
            });
        }
        
        next();
        
    } catch (error) {
        console.error('Authentication middleware error:', error);
        return res.status(500).json({
            error: "Erreur d'authentification"
        });
    }
};