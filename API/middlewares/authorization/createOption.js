const prisma = require("../../utils/client");

const canCreateOption = async (req, res, next) => {
  const { user, body: option } = req;

  const input = await prisma.input.findFirst({
    where: {id: option.inputId},
    select: {
        formulaire: {
            select: {
                entrepriseId: true
            }
        }
    }
  });

  if(!input){
    return res.status(404).json({
        error: "Pas de champ auquel associer cette option"
    })
  }

  if (
    !user.entreprises.find(
      (entreprise) => entreprise.id === input.formulaire.entrepriseId
    )
  ) {
    return res.status(403).json({
      error: "Vous n'avez pas les droits requis",
    });
  }
  return next();
};

module.exports = canCreateOption;
