module.exports = {
  email: {
    trim: true,
    notEmpty: { errorMessage: "L'email est requis" },
    isEmail: { errorMessage: "Veuillez renseigner un email valide" },
  },
  content: {
    exists: {
      options: { checkNull: true },
      errorMessage: "Le contenu de la soumission est requis",
    },
  },
  formulaireId: {
    notEmpty: { errorMessage: "Le formulaire est requis" },
    isInt: { errorMessage: "Le formulaire est invalide" },
    toInt: true,
  },
};
