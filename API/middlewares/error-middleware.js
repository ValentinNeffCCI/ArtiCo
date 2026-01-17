const fs = require('fs');

module.exports = (err, req, res, next) => {
    // method - Status - Date + heure - path - erreur 
    const today = new Date();
    const log = `${err.status ?? 500} ${req.method} ${today.toLocaleDateString()}-${today.toTimeString().split(' ')[0]} ${req.originalUrl} "${err.message}"\n`

    fs.appendFileSync('./logs/error.log', log);

    if (err.status) {
        return res.status(err.status).json(err)
    }
    return res.status(500).json({
        error: (err.message || "Erreur serveur")
    })
}