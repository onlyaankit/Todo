import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/database.js";
import bodyParser from "body-parser";
import userRouter from "./routes/user.route.js"
import todoRouter from "./routes/todo.route.js"
const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
connectDB();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1/user", userRouter);
app.use("/api/v1/todo", todoRouter);
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});
