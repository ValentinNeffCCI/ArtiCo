const bcrypt = require("bcrypt");

const autoHashingPassword = async (req, res, next) => {
    if(req.body.password){
        if(req.body.password.length < 12){
            return res.status(400).json({
                error: "Votre mot de passe doit contenir au moins 12 caractères"
            })
        }
        req.body.password = await bcrypt.hash(req.body.password, 10);
    }
    next();
}

module.exports = autoHashingPassword