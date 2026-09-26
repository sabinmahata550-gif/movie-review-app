import dotenv from "dotenv";
dotenv.config();

const config = {
    port: process.env.PORT || "",
    mongoUri: process.env.MONGO_URI || "",
    jwtSecret: process.env.JWT_SECRET || "",
    tmbAccessToken: process.env.TMDB_ACCESS_TOKEN || "",
    baseURL: process.env.BASE_URL || ""

}

export default config;