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

app.use("/api/auth", AuthRouter);
app.use("/api/entreprise", EntrepriseRouter);
app.use("/api/formulaire", FormulaireRouter);
app.use("/api/galerie", GalerieRouter);
app.use("/api/input", InputRouter);
app.use("/api/option", OptionRouter);
app.use("/api/submission", SubmissionRouter);
app.use("/api/user", UserRouter);
app.use("/api/admin", AdminRouter);
app.use("/api/categorie", CategorieRouter);

// Accéder aux uploads
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"), {
    setHeaders: (res, filePath, stat) => {
      // Bug sur les jpg/jpeg
      const ext = path.extname(filePath).toLowerCase();
      if (ext === ".jpg" || ext === ".jpeg") {
        res.setHeader("Content-Type", "image/jpeg");
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

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT} : ${new Date().toLocaleDateString()}`);
});