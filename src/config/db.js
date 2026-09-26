import mongoose from "mongoose";
import config from "./config.js";

const connectDb = async () => {
    try {
        await mongoose.connect(config.mongoUri);
        console.log("Mongodb connect successfull.")
    } catch (error) {
        console.log("Mongodo disconnect", error)
    }
}

export default connectDb;