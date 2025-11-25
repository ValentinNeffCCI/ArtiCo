import jwt from "jsonwebtoken";

export default {
    login: (email, password) => {
        // test connexion
    },
    register: (user) => {
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
    resetPassword: (email) => {
        // recherche par email si user puis envoie mail selon id
    },
};
