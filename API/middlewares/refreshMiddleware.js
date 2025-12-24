const jwt = require("jsonwebtoken");

const refreshMiddleware = (req, res, next) => {
    const refresh_token = req.cookies.refresh_token;
    if (!refresh_token) return res.status(401).json({ message: "Unauthorized" });
    
    try {
        jwt.verify(refresh_token, process.env.REFRESH_KEY, (err, decoded) => {
            if (err) return res.status(401).json({ message: "Unauthorized" });
            req.user = decoded;
            req.token = refresh_token;
            next();
        });
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}

module.exports = refreshMiddleware;