import reviewService from "../services/reviewService.js";

const createReview = async (req, res) => {
    try {
        const review = await reviewService.createReview(
            req.body,
            req.user.id
        );

        res.status(201).json({
            message: "Review created successfully.",
            review
        });

    } catch (error) {
        res.status(error.status || 500).json({
            message: error.message || "Something went wrong."
        });
    }
};

const getMovieReviews = async (req, res) => {
    try {
        const { tmdbMovieId } = req.params;

        const reviews = await reviewService.getMovieReviews(
            tmdbMovieId
        );

        res.status(200).json({
            count: reviews.length,
            reviews
        });

    } catch (error) {
        res.status(error.status || 500).json({
            message: error.message || "Something went wrong."
        });
    }
};

const deleteReview = async (req, res) => {
    try {
        const { reviewId } = req.params;

        const result = await reviewService.deleteReview(
            reviewId,
            req.user.id
        );

        res.status(200).json(result);

    } catch (error) {
        res.status(error.status || 500).json({
            message: error.message || "Something went wrong."
        });
    }
};

const getReviewById = async (req, res) => {
    try {
        const { reviewId } = req.params;

        const review = await reviewService.getReviewById(
            reviewId
        );

        res.status(200).json({
            review
        });

    } catch (error) {
        res.status(error.status || 500).json({
            message: error.message || "Something went wrong."
        });
    }
};

export default {
    createReview,
    getMovieReviews,
    deleteReview,
    getReviewById
};