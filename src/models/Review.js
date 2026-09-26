import mongoose from "mongoose";
import {
    GO_FOR_IT,
    PERFECT_MOVIE,
    TIME_PASS,
    WASTE_OF_TIME
} from "../constants/reviewVerdict.js";

const reviewSchema = new mongoose.Schema(
    {
        tmdbMovieId: {
            type: Number,
            required: true,
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5,
        },

        verdict: {
            type: String,
            enum: [
                PERFECT_MOVIE,
                GO_FOR_IT,
                TIME_PASS,
                WASTE_OF_TIME
            ],
            required: true,
        },

        comment: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;