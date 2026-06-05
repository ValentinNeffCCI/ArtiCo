const mongoose = require('mongoose');

// Les écritures échouent immédiatement si Mongo n'est pas joignable
// (au lieu d'être mises en file d'attente) : cela permet de basculer
// vers le repli fichier/console sans bloquer la requête.
mongoose.set('bufferCommands', false);

let connected = false;

mongoose.connection.on('connected', () => {
    connected = true;
    console.log('MongoDB (logs) connecté');
});

mongoose.connection.on('disconnected', () => {
    connected = false;
    console.warn('MongoDB (logs) déconnecté');
});

mongoose.connection.on('error', (err) => {
    connected = false;
    console.warn('MongoDB (logs) erreur :', err.message);
});

// Connexion non bloquante : une indisponibilité de Mongo ne doit jamais
// empêcher l'API de démarrer (cf. tests CI sans Mongo, repli fichier).
function connectMongo() {
    if (!process.env.MONGO_URL) {
        console.warn('MONGO_URL absent : logs en repli fichier/console uniquement');
        return;
    }

    mongoose
        .connect(process.env.MONGO_URL, { serverSelectionTimeoutMS: 5000 })
        .catch((err) => {
            console.warn('MongoDB (logs) connexion impossible :', err.message);
        });
}

function isMongoConnected() {
    return connected;
}

module.exports = { connectMongo, isMongoConnected };
