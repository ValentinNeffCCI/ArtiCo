export default {
    login: async (email, password) => {
        return [email, password];
        // test connexion
    },
    register: async (user) => {
        // vérifications (email unique) et ajout dans la DB
        const fields = [
            'email',
            'codePostal',
            'name',
            'password'
        ];
        if (!fields.every(item => item in user)) {
            return false;
        }
        return user;
    },
    reset: async (email) => {
        return email;
        // recherche par email si user puis envoie mail selon id
    },
};
