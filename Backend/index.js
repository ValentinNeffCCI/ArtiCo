import dotenv from "dotenv";
import express from "express";
import jwt from "jsonwebtoken";
import AuthService from "./services/AuthService.js";

// Charger les .env
dotenv.config();

// Créer l'app
const app = express();
app.use(express.json());

// Routers par entité
const userRouter = express.Router();
const adminRouter = express.Router();
const entrepriseRouter = express.Router();

// Informations depuis .env
const SECRET = process.env.SECRET_KEY;
const PORT = process.env.PORT || 3000;

// Vérifie si un user est donné dans le token et si il doit être un admin
const authenticate = (superAuth = false) => (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;

    if (superAuth && (!user.role || user.role !== "admin")) {
      return res.sendStatus(403);
    }

    next();
  });
};

// Region Routes user
userRouter.use(authenticate());
userRouter.get("/", (req, res) => {
  res.json({ message: "Hello authenticated user", user: req.user });
});

// Region Routes entreprise
entrepriseRouter.use(authenticate());
entrepriseRouter.get("/", (req, res) => {
  res.json({ message: "Hello authenticated user", user: req.user });
});

// Region Routes admin
adminRouter.use(authenticate(true));
adminRouter.get("/:id", (req, res) => {
  res.json({ message: `Admin access to ID ${req.params.id}`, user: req.user });
});

// Ajout des prefix
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/entreprise", entrepriseRouter);

// Region routes publiques
app.post('/login', (req, res) => {
    const user = AuthService.login(req.body)
});
app.post('/register', (req, res) => {
    const user = AuthService.register(req.body);
    return res.status(user? 200 : 400).json(user);
});

// TODO: login, register, CRUDs, password-reset, upload fichiers, connexion pg/mongoDb

// Lancement de l'app avec tous les routers enregistrés
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
