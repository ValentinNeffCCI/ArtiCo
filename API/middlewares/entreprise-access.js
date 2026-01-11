const verifyAccessEntreprise = async (req, res, next) => {
    const user = req.user;
    if(user.role === "ADMIN") return next()

    const {id} = req.params;
    const entreprise = user.entreprises.find(entreprise => entreprise.id == id);

    if(!entreprise){
        return res.status(404).json({
            error: "Pas d'entreprise trouvée"
        })
    }

    if(entreprise.ownerId !== user.id){
        return res.status(403).json({
            error: "Vous n'avez pas les droits sur cette entreprise."
        })
    }

    next();
}

module.exports = verifyAccessEntreprise