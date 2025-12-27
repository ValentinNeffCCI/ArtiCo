const prisma = require("../utils/client");

const verifyAccessFormulaire = async (req, res, next) => {
    const user = req.user;
    if(user.role === "ADMIN") return next()

    const {id} = req.params;
    const formulaire = await prisma.formulaire.findFirst({
        where: {id},
        select: {
            id: true,
            entrepriseId: true
        }
    })

    if(!formulaire){
        return res.status(404).json({
            error: "Champ introuvable"
        })
    }

    const entreprise = req.user.entreprises.find(entreprise=>entreprise.id === formulaire.entrepriseId);

    if(entreprise) return res.status(403).json({error: "Vous n'avez pas les droits sur ce formulaire"})

    next();
}

module.exports = verifyAccessFormulaire