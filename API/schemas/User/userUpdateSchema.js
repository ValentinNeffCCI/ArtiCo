module.exports = {
  email: {
    isEmail: true,
    errorMessage: "Veuillez renseigner une email valide",
  },
  password: {
    isLength: {
      options: { min: 8 },
      errorMessage: "Votre mot de passe doit contenir au moins 8 caractères",
    },
  },
};
