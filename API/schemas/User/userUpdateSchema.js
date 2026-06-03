// Mise à jour partielle : chaque champ n'est validé que s'il est présent.
module.exports = {
  name: {
    optional: { options: { values: "falsy" } },
    trim: true,
    isLength: {
      options: { min: 5 },
      errorMessage: "Votre pseudo doit contenir au moins 5 caractères",
    },
    isString: {
      errorMessage: "Le nom doit être une chaîne de caractères",
    },
  },
  email: {
    optional: { options: { values: "falsy" } },
    trim: true,
    isEmail: { errorMessage: "Veuillez renseigner un email valide" },
  },
  password: {
    optional: { options: { values: "falsy" } },
    isLength: {
      options: { min: 12 },
      errorMessage: "Votre mot de passe doit contenir au moins 12 caractères",
    },
  },
};
