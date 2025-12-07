module.exports = (fields) => (req, res, next) => {
    if(!req.body) return res.status(400).json({ error: "Veuillez remplir les champs !" });
    const missingFields = fields.filter(field => !req.body[field]);
    if (missingFields.length > 0) {
        return res.status(400).json({ error: `Champs manquants: ${missingFields.join(', ')}` });
    }
    next();
}