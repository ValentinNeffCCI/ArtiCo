const prisma = require("../../utils/client");

const canCreateInput = async (req, res, next) => {
  const { user, body: input } = req;

  const formulaire = await prisma.formulaire.findFirst({
    where: {id: input.formulaireId},
    select: {
        entrepriseId: true,
        id: true
    }
  });

  if(!formulaire){
    return res.status(404).json({
        error: "Pas de questionnaire correspondant"
    })
  }

  if (
    !user.entreprises.find(
      (entreprise) => entreprise.id === formulaire.entrepriseId
    )
  ) {
    return res.status(403).json({
      error: "Vous n'avez pas les droits requis",
    });
  }
  return next();
};

module.exports = canCreateInput;
