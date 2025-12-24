const idParser = (req, res, next) => {
    const params = Object.keys(req.params);
    for (const param of params) {
        if(param.toLowerCase().includes("id")) {
            req.params[param] = parseInt(req.params[param]);
        }
    }
    next();
}

module.exports = idParser;