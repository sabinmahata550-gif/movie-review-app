import Review from "../models/Review.js";

const createReview = async (data, userId) => {

    const {
        tmdbMovieId,
    } = data;


    const existingReview = await Review.findOne({
        tmdbMovieId,
        user: userId
    });

    if (existingReview) {
        throw {
            status: 400,
            message: "You have already reviewed this movie."
        };
    }

    const review = await Review.create({
        ...data,
        user: userId
    });

    return review;
};

const getMovieReviews = async (tmdbMovieId) => {

    const reviews = await Review.find({
        tmdbMovieId
    })
        .populate("user", "name email");

    return reviews;
};

const deleteReview = async (reviewId, userId) => {

    const review = await Review.findOne({
        _id: reviewId,
        user: userId
    });

    if (!review) {
        throw {
            status: 404,
            message: "Review not found."
        };
    }

    await Review.findByIdAndDelete(reviewId);

    return {
        message: "Review deleted successfully."
    };
};

const getReviewById = async (reviewId) => {
    const review = await Review.findById(reviewId)
        .populate("user", "name");

    if (!review) {
        throw {
            status: 404,
            message: "Review not found."
        };
    }

    return review;
};

export default {
    createReview,
    getMovieReviews,
    deleteReview,
    getReviewById
};