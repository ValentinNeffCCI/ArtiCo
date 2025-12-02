const userResource = (user) => {
    if(!user) return null;
    return {
        id: user.id ,
        email: user.email,
        name: user.name,
        entreprises: user.entreprises,
        role: user.role
    }
}

module.exports = userResource;
