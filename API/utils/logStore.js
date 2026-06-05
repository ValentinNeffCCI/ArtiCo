const fs = require('fs');
const path = require('path');
const Log = require('../models/log-model.js');
const { isMongoConnected } = require('./mongo.js');

const logsDir = path.join(__dirname, '..', 'logs');
fs.mkdirSync(logsDir, { recursive: true });

// Repli : reformate le document en une ligne texte (format proche de l'ancien)
// et l'ajoute au fichier .log correspondant au type.
function appendToFile(doc) {
    const today = new Date();
    const stamp = `${today.toLocaleDateString()}-${today.toTimeString().split(' ')[0]}`;

    let line;
    let file;
    if (doc.type === 'error') {
        file = 'error.log';
        line = `${doc.status ?? 500} ${doc.method} ${stamp} ${doc.url} "${doc.message}"\n`;
    } else {
        file = 'access.log';
        line = `${doc.method} ${doc.url} ${doc.ip} ${doc.status ?? ''} ${stamp}\n`;
    }

    try {
        fs.appendFileSync(path.join(logsDir, file), line);
    } catch (e) {
        console.error('Échec écriture log fichier :', e.message);
    }
}

// Écrit un log structuré dans Mongo si disponible, sinon bascule sur le
// repli fichier + console. Ne jette jamais : le logging ne doit pas faire
// échouer une requête. En environnement de test, repli silencieux.
async function writeLog(doc) {
    if (isMongoConnected()) {
        try {
            await Log.create(doc);
            return;
        } catch (e) {
            console.error('Échec écriture log Mongo, repli fichier :', e.message);
        }
    }

    if (process.env.NODE_ENV === 'test') {
        return;
    }

    appendToFile(doc);
    if (doc.type === 'error') {
        console.error(`[error] ${doc.status ?? 500} ${doc.method} ${doc.url} "${doc.message}"`);
    }
}

module.exports = { writeLog };
