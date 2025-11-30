// libs
import dotenv from "dotenv";
import express from "express";
import sequelize from "./sequelize/init.js";

// routers
import AuthRouter from "./routers/auth-router.js";
import errorMiddleware from "./middlewares/error-middleware.js";

// .env
dotenv.config();

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

// test DB connection
const Sequelize = sequelize(DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT);

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/auth", AuthRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
