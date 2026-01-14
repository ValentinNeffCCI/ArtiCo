const prisma = require("../utils/client");

const verifyAccessInput = async (req, res, next) => {
    const user = req.user;
    if(user.role === "ADMIN") return next()

    const {id} = req.params;
    const input = await prisma.input.findFirst({
        where: {id},
        select: {
            id: true,
            formulaire: {
                select: {
                    entrepriseId: true
                }
            }
        }
    })

    if(!input){
        return res.status(404).json({
            error: "Champ introuvable"
        })
    }

    const entreprise = req.user.entreprises.find(entreprise=>entreprise.id === input.formulaire.entrepriseId);

    if(!entreprise) return res.status(403).json({error: "Vous n'avez pas les droits nécessaire pour supprimer ce champ"})

    next();
}

module.exports = verifyAccessInput