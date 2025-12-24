const bcrypt = require("bcrypt");

const autoHashingPassword = async (req, res, next) => {
    if(req.body.password){
        req.body.password = await bcrypt.hash(req.body.password, 10);
    }
    next();
}

module.exports = autoHashingPassword