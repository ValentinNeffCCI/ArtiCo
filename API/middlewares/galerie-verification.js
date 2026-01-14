const prisma = require("../utils/client");

const verifyAccessGalerie = async (req, res, next) => {
  const user = req.user;
  if ((user.role = "ADMIN")) return next();

  const { id } = req.params;
  const galerie = await prisma.galerie.findFirst({
    where: { id },
    select: {
      id: true,
      entrepriseId: true,
    },
  });

  if (!galerie) {
    return res.status(404).json({
      error: "Photo introuvable",
      status: 404,
    });
  }

  const entreprise = req.user.entreprises.find(
    (entreprise) => entreprise.id === galerie.entrepriseId
  );

  if (!entreprise) {
    return res.status(403).json({
      status: 403,
      error: "Vous n'avez pas le droit de toucher à cette photo",
    });
  }

  next();
};

module.exports = verifyAccessGalerie;
