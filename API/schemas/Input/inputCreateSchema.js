module.exports = {
  name: {
    optional: { options: { values: "falsy" } },
    trim: true,
    isString: { errorMessage: "Le nom du champ doit être une chaîne de caractères" },
  },
  type: {
    optional: { options: { values: "falsy" } },
    isString: { errorMessage: "Le type du champ doit être une chaîne de caractères" },
  },
  required: {
    optional: true,
    isBoolean: { errorMessage: "Le champ 'required' doit être un booléen" },
    toBoolean: true,
  },
  formulaireId: {
    notEmpty: { errorMessage: "Le formulaire est requis" },
    isInt: { errorMessage: "Le formulaire est invalide" },
    toInt: true,
  },
};
