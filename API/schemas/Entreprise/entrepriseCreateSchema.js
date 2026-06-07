module.exports = {
  name: {
    trim: true,
    notEmpty: { errorMessage: "Le nom de l'entreprise est requis" },
    isString: { errorMessage: "Le nom doit être une chaîne de caractères" },
  },
  email: {
    trim: true,
    notEmpty: { errorMessage: "L'email est requis" },
    isEmail: { errorMessage: "Veuillez renseigner un email valide" },
  },
  city: {
    trim: true,
    notEmpty: { errorMessage: "La ville est requise" },
  },
  cp: {
    trim: true,
    notEmpty: { errorMessage: "Le code postal est requis" },
    isPostalCode: {
      options: "FR",
      errorMessage: "Le code postal est invalide",
    },
  },
  address1: {
    trim: true,
    notEmpty: { errorMessage: "L'adresse est requise" },
  },
  address2: {
    optional: { options: { values: "falsy" } },
    trim: true,
    isString: { errorMessage: "L'adresse doit être une chaîne de caractères" },
  },
  phone: {
    optional: { options: { values: "falsy" } },
    matches: {
      options: [/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/],
      errorMessage: "Le numéro de téléphone est invalide",
    },
  },
  description: {
    trim: true,
  },
  categorieId: {
    notEmpty: { errorMessage: "La catégorie est requise" },
    isInt: { errorMessage: "La catégorie est invalide" },
    toInt: true,
  },
};
