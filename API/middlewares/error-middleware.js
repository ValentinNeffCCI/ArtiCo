export default (err, req, res, next) => {
    if(err.status){
        return res.status(err.status).json(err)
    }
    res.status(500).json({
        error: "erreur serveur"
    })
    next();
}