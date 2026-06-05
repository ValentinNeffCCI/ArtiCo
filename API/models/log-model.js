const mongoose = require('mongoose');

// Document de log structuré. Couvre les accès (requêtes HTTP) et les erreurs.
// `meta` (Mixed) laisse la porte ouverte à des informations additionnelles
// sans imposer de migration.
const logSchema = new mongoose.Schema(
    {
        type: { type: String, enum: ['access', 'error'], required: true, index: true },
        method: { type: String },
        url: { type: String },
        ip: { type: String },
        status: { type: Number },
        message: { type: String },
        stack: { type: String },
        userId: { type: Number },
        userAgent: { type: String },
        responseTimeMs: { type: Number },
        meta: { type: mongoose.Schema.Types.Mixed },
    },
    { timestamps: true, collection: 'logs' }
);

module.exports = mongoose.model('Log', logSchema);
