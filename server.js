import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/mongoose.config.js";
import userRouter from "./routes/user.route.js";


const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);

dotenv.config();
const PORT = process.env.PORT;
dbConnect();
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
