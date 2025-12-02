const onlyUser = (req, res, next) => {
    if(req.user.id !== parseInt(req.params.id) && req.user.role !== "ADMIN"){
        return res.status(403).json({ message: "Vous n'avez pas accès à cette ressource" });
    }
    next();
}

module.exports = onlyUser
