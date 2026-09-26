import express from "express";
import authRouter from "./routes/userRoute.js";
import reviewRouter from "./routes/reviewRoute.js"
import movieRouter from "./routes/moviRoute.js"

import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/movies", movieRouter);

export default app;