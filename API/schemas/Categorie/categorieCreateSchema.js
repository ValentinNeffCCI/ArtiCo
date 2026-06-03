module.exports = {
  name: {
    trim: true,
    notEmpty: { errorMessage: "Le nom de la catégorie est requis" },
    isString: { errorMessage: "Le nom doit être une chaîne de caractères" },
  },
};
