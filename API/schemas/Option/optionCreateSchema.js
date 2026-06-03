module.exports = {
  value: {
    optional: { options: { values: "falsy" } },
    trim: true,
    isString: { errorMessage: "La valeur de l'option doit être une chaîne de caractères" },
  },
  inputId: {
    notEmpty: { errorMessage: "Le champ associé est requis" },
    isInt: { errorMessage: "Le champ associé est invalide" },
    toInt: true,
  },
};
