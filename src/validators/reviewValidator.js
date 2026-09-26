import { z } from "zod";

import {
    PERFECT_MOVIE,
    GO_FOR_IT,
    TIME_PASS,
    WASTE_OF_TIME
} from "../constants/reviewVerdict.js";

export const createReviewSchema = z.object({
    tmdbMovieId: z.coerce
        .number()
        .int()
        .positive(),

    rating: z.coerce
        .number()
        .min(1)
        .max(5),

    verdict: z.enum([
        PERFECT_MOVIE,
        GO_FOR_IT,
        TIME_PASS,
        WASTE_OF_TIME
    ]),

    comment: z
        .string()
        .trim()
        .min(3, "Comment must be at least 3 characters")
        .max(1000, "Comment must not exceed 1000 characters")
});




export const reviewIdSchema = z.object({
    reviewId: z.string().min(1)
});