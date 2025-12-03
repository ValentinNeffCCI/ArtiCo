const userResource = (user) => {
    if(!user) throw new HttpError("Aucun utilisateur trouvé", 404);
    return {
        id: user.id ,
        email: user.email,
        name: user.name,
        entreprises: user.entreprises,
        role: user.role
    }
}

module.exports = userResource;
