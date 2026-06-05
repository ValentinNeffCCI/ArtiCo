const { writeLog } = require('../utils/logStore.js');

module.exports = (err, req, res, next) => {
    writeLog({
        type: 'error',
        status: err.status ?? 500,
        method: req.method,
        url: req.originalUrl,
        message: err.message,
        stack: err.stack,
        ip: req.ip,
        userId: req.user?.id,
    });

    if (err.status) {
        return res.status(err.status).json(err);
    }

    // Dans tous les autres cas 404
    next();
};
