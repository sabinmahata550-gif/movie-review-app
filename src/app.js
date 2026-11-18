import express from "express";
import cors from "cors";

import authRouter from "./routes/userRoute.js";
import reviewRouter from "./routes/reviewRoute.js";
import movieRouter from "./routes/moviRoute.js";

import cookieParser from "cookie-parser";

const app = express();

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.json({
        message: "Movie Review API is running."
    });
});

app.use("/api/auth", authRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/movies", movieRouter);

export default app;