const prisma = require("../utils/client");

const verifyAccessOptions = async (req, res, next) => {
    const user = req.user;
    if(user.role === "ADMIN") return next()

    const {id} = req.params;
    const option = await prisma.option.findFirst({
        where: {id},
        select: {
            id: true,
            input: {
                select: {
                    formulaire: {
                        select: {
                            entrepriseId: true
                        }
                    }
                }
            }
        }
    })

    
    if(!option){
        return res.status(404).json({
            error: "Champ introuvable"
        })
    }
    
    const entreprise = req.user.entreprises.find(entreprise=>entreprise.id === option.input.formulaire.entrepriseId);

    if(!entreprise) return res.status(403).json({error: "Vous n'avez pas les droits nécessaire pour supprimer cette option"})

    next();
}

module.exports = verifyAccessOptions