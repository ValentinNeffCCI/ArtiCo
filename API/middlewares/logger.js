const { writeLog } = require('../utils/logStore.js');

// Log d'accès structuré. On enregistre à la fin de la réponse (`finish`)
// pour disposer du code de statut et du temps de traitement.
module.exports = (req, res, next) => {
    const start = Date.now();

    res.on('finish', () => {
        writeLog({
            type: 'access',
            method: req.method,
            url: req.originalUrl,
            ip: req.ip,
            status: res.statusCode,
            responseTimeMs: Date.now() - start,
            userId: req.user?.id,
            userAgent: req.get('user-agent'),
        });
    });

    next();
};
