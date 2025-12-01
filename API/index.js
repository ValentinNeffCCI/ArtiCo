// libs
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

// routers
const AuthRouter = require("./routers/auth-router.js");
const EntrepriseRouter = require("./routers/entreprise-router.js");
const FormulaireRouter = require("./routers/formulaire-router.js");
const GalerieRouter = require("./routers/galerie-router.js");
const InputRouter = require("./routers/input-router.js");
const OptionRouter = require("./routers/option-router.js");
const SubmissionRouter = require("./routers/submission-router.js");
const UserRouter = require("./routers/user-router.js");

// middlewares
const errorMiddleware = require("./middlewares/error-middleware.js");

// .env
dotenv.config();

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api/auth", AuthRouter);
app.use("/api/entreprise", EntrepriseRouter);
app.use("/api/formulaire", FormulaireRouter);
app.use("/api/galerie", GalerieRouter);
app.use("/api/input", InputRouter);
app.use("/api/option", OptionRouter);
app.use("/api/submission", SubmissionRouter);
app.use("/api/user", UserRouter);

app.use(errorMiddleware);

app.use((req, res) => {
    res.status(404).send();
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
