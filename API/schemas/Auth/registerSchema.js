module.exports = {
  name: {
    isLength: {
      options: {
        min: 5,
      },
      errorMessage: "Votre pseudo doit contenir au moins 5 caractères",
    },
    isString: {
      errorMessage: "Le nom doit être une chaîne de caractères",
    },
  },
  email: {
    isEmail: true,
    isString: {
      errorMessage: "L'email doit être une chaîne de caractères",
    },
    errorMessage: "Veuillez renseigner une email valide",
  },
  password: {
    isLength: {
      options: { min: 8 },
      errorMessage: "Votre mot de passe doit contenir au moins 8 caractères",
    },
    isString: {
      errorMessage: "Le mot de passe doit être une chaîne de caractères",
    },
  },
};
