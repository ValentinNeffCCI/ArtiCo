module.exports = {
  name: {
    trim: true,
    notEmpty: { errorMessage: "Le nom du formulaire est requis" },
    isString: { errorMessage: "Le nom doit être une chaîne de caractères" },
  },
  entrepriseId: {
    notEmpty: { errorMessage: "L'entreprise est requise" },
    isInt: { errorMessage: "L'entreprise est invalide" },
    toInt: true,
  },
};
