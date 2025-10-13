export default {
  login: (email, password) => {
    // test connexion
  },
  register: (user) => {
    // vérifications (email unique) et ajout dans la DB
    try {
        const fields = [
            'email',
            'codePostal',
            'name',
            'password'
        ];
        if (!fields.every(item => item in user)) throw new Error();
        return user;
    } catch (error) {
        return false;        
    }
  },
  resetPassword: (email) => {
    // recherche par email si user puis envoie mail selon id
  },
};
