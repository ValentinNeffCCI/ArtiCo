// libs
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const { rateLimit } = require("express-rate-limit");

// routers
const AuthRouter = require("./routers/auth-router.js");
const EntrepriseRouter = require("./routers/entreprise-router.js");
const FormulaireRouter = require("./routers/formulaire-router.js");
const GalerieRouter = require("./routers/galerie-router.js");
const InputRouter = require("./routers/input-router.js");
const OptionRouter = require("./routers/option-router.js");
const SubmissionRouter = require("./routers/submission-router.js");
const UserRouter = require("./routers/user-router.js");
const CategorieRouter = require("./routers/categorie-router.js");
const AdminRouter = require("./routers/admin-router.js");

// middlewares
const errorMiddleware = require("./middlewares/error-middleware.js");
const logger = require("./middlewares/logger.js");

// .env
dotenv.config();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 200,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  skipSuccessfulRequests: true
});

// temps pour le cache des images
const cacheTime = 60 * 60 * 24 * 31;

const app = express();

// derrière le reverse proxy nginx (X-Forwarded-For)
app.set("trust proxy", 1);

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(limiter);
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        imgSrc: [
          "'self'",
          "data:",
          "blob:",
          process.env.FRONTEND_URL,
          "http://localhost:3000",
        ],
      },
    },
  })
);

const PORT = process.env.PORT || 3000;

// log
app.use(logger);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the ArtiCo API' });
});

const apiRouter = express.Router();
app.use("/api", apiRouter);

apiRouter.use("/auth", AuthRouter);
apiRouter.use("/entreprise", EntrepriseRouter);
apiRouter.use("/formulaire", FormulaireRouter);
apiRouter.use("/galerie", GalerieRouter);
apiRouter.use("/input", InputRouter);
apiRouter.use("/option", OptionRouter);
apiRouter.use("/submission", SubmissionRouter);
apiRouter.use("/user", UserRouter);
apiRouter.use("/admin", AdminRouter);
apiRouter.use("/categorie", CategorieRouter);

// Accéder aux uploads
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"), {
    setHeaders: (res, filePath, stat) => {

      const ext = path.extname(filePath).toLowerCase();

      const authorizedExtensions = [".jpg", ".jpeg", ".png", ".gif", "webp"];
      if(ext && !authorizedExtensions.includes(ext)) {
        return;
      }
      
      if (ext === ".jpg" || ext === ".jpeg") {
        res.setHeader("Content-Type", "image/jpeg");
      } else {
        res.setHeader("Content-Type", `image/${ext.slice(1)}`);
      }

      res.set("Cross-Origin-Resource-Policy", "cross-origin");
      res.set("Cache-Control", "public, max-age=" + cacheTime);
    },
  })
);

// Gérer les erreurs
app.use(errorMiddleware);

app.use((req, res) => {
  res.status(404).send();
});

app.listen(PORT, process.env.HOSTNAME , () => {
  console.log(`Server running at http://localhost:${PORT} : ${new Date().toLocaleDateString()}`);
});