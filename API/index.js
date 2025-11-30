// libs
const dotenv = require("dotenv");
const express = require("express");

// routers
const AuthRouter = require("./routers/auth-router.js");
const errorMiddleware = require("./middlewares/error-middleware.js");

// .env
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/auth", AuthRouter);

app.use(errorMiddleware);

app.use((req, res) => {
    res.status(404).send();
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
