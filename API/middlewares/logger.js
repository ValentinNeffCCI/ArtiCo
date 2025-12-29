const fs = require('fs');

module.exports = (req,res,next)=>{
    const today = new Date();
    const log = `${req.method} ${req.originalUrl} ${req.ip} ${today.toLocaleDateString()}-${today.toTimeString().split(' ')[0]}\n`;
    fs.appendFileSync('./logs/access.log', log);
    next();
}