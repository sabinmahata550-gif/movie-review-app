import { z } from "zod";

const discoverMovieSchema = z.object({
    genre: z
        .string()
        .trim()
        .min(2, "Genre must be at least 2 characters")
        .optional(),

    year: z.coerce
        .number()
        .int()
        .min(1900)
        .max(2100)
        .optional(),

    minRating: z.coerce
        .number()
        .min(0)
        .max(10)
        .optional(),

    language: z
        .string()
        .trim()
        .min(2)
        .optional(),

    sort: z.enum([
        "popularity.asc",
        "popularity.desc",
        "vote_average.asc",
        "vote_average.desc",
        "primary_release_date.asc",
        "primary_release_date.desc"
    ]).optional(),

    limit: z.coerce
        .number()
        .int()
        .min(1)
        .max(20)
        .optional(),

    page: z.coerce
        .number()
        .int()
        .min(1)
        .optional()
});

export const searchMovieSchema = z.object({
    query: z
        .string()
        .trim()
        .min(1, "Movie name is required"),

    page: z.coerce
        .number()
        .int()
        .min(1)
        .optional()
});


export const movieIdSchema = z.object({
    movieId: z.coerce
        .number()
        .int()
        .positive()
});
export default discoverMovieSchema;