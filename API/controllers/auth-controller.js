export default {
    login: (req, res, next) => {
        try {
            const user = AuthService.login(req.body)
            return res.status(200).json(jwt.sign(user, SECRET, {expiresIn: '2h'}));
        } catch (error) {
            return next(error);
        }
    },
    register: (req, res, next) => {
        try {
            const user = AuthService.register(req.body);
            return res.status(user ? 200 : 409).json(jwt.sign(user, SECRET, {expiresIn: "2h"}));
        } catch (error) {
            return next(error);
        }
    },
    resetPassword: (req, res, next) => {
        try {
            const user = AuthService.resetPassword(req.body);
            return res.status(user ? 200 : 409).json(jwt.sign(user, SECRET, {expiresIn: "2h"}));
        } catch (error) {
            return next(error);
        }
    }
}