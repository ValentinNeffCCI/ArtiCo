const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, '..', 'logs');
fs.mkdirSync(logsDir, { recursive: true });

module.exports = (err, req, res, next) => {
    // method - Status - Date + heure - path - erreur
    const today = new Date();
    const log = `${err.status ?? 500} ${req.method} ${today.toLocaleDateString()}-${today.toTimeString().split(' ')[0]} ${req.originalUrl} "${err.message}"\n`

    try {
        fs.appendFileSync(path.join(logsDir, 'error.log'), log);
    } catch (e) {
        console.error('Failed to write error log:', e.message);
    }

    if (err.status) {
        return res.status(err.status).json(err)
    }

    // Dans tous les autres cas 404
    next();
}