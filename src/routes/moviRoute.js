import express from "express";

import movieController from "../controllers/moviController.js";
import validate from "../middlewares/validate.js";

import discoverMovieSchema, {
    movieIdSchema,
    searchMovieSchema
} from "../validators/movieValidator.js";

const router = express.Router();

router.get(
    "/popular",
    movieController.getPopularMovies
);

router.get(
    "/search",
    validate(searchMovieSchema, "query"),
    movieController.searchMovies
);

router.get(
    "/discover",
    validate(discoverMovieSchema, "query"),
    movieController.discoverMovies
);

router.get(
    "/genres",
    movieController.getGenres
);

router.get(
    "/:movieId",
    validate(movieIdSchema, "params"),
    movieController.getMovieDetails
);

export default router;