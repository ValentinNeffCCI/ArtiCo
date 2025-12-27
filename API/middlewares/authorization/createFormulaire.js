const canCreateForm = (req, res, next) => {
  const { user, body: formulaire } = req;

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

module.exports = canCreateForm;
