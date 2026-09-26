import express from "express";

import reviewController from "../controllers/reviewController.js";
import authMiddleware from "../middlewares/auth.js";
import validate from "../middlewares/validate.js";

import {
    createReviewSchema,
    reviewIdSchema
} from "../validators/reviewValidator.js";

const router = express.Router();

router.post(
    "/",
    authMiddleware,
    validate(createReviewSchema),
    reviewController.createReview
);

router.get(
    "/movie/:tmdbMovieId",
    reviewController.getMovieReviews
);

router.get(
    "/:reviewId",
    validate(reviewIdSchema, "params"),
    reviewController.getReviewById
);

router.delete(
    "/:reviewId",
    authMiddleware,
    validate(reviewIdSchema, "params"),
    reviewController.deleteReview
);

export default router;