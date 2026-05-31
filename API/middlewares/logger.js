const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, '..', 'logs');
fs.mkdirSync(logsDir, { recursive: true });

module.exports = (req,res,next)=>{
    const today = new Date();
    const log = `${req.method} ${req.originalUrl} ${req.ip} ${today.toLocaleDateString()}-${today.toTimeString().split(' ')[0]}\n`;
    try {
        fs.appendFileSync(path.join(logsDir, 'access.log'), log);
    } catch (e) {
        console.error('Failed to write access log:', e.message);
    }
    next();
}
