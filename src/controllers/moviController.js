import tmdbService from "../services/tmdService.js";

const getPopularMovies = async (req, res) => {
    try {
        const movies = await tmdbService.getPopularMovies();
        res.status(200).json(movies);

    } catch (error) {
        res.status(error.response?.status || 500).json({
            message:
                error.response?.data?.status_message ||
                error.message
        });
    }
};





const searchMovies = async (req, res) => {
    try {
        const { query, page } = req.validatedQuery;

        const movies = await tmdbService.searchMovies(
            query,
            page
        );

        res.status(200).json(movies);

    } catch (error) {
        res.status(error.response?.status || error.status || 500).json({
            message:
                error.response?.data?.status_message ||
                error.message ||
                "Something went wrong."
        });
    }
};

const getMovieDetails = async (req, res) => {
    try {
        const { movieId } = req.validatedParams;

        const movie = await tmdbService.getMovieDetails(
            movieId
        );

        res.status(200).json(movie);

    } catch (error) {
        res.status(
            error.response?.status ||
            error.status ||
            500
        ).json({
            message:
                error.response?.data?.status_message ||
                error.message ||
                "Something went wrong."
        });
    }
};
const discoverMovies = async (req, res) => {
    try {

        const movies = await tmdbService.discoverMovies(
            req.validatedQuery

        );

        res.status(200).json(movies);

    } catch (error) {

        res.status(error.response?.status || 500).json({
            message:
                error.response?.data?.status_message ||
                error.message
        });
    }
};
const getGenres = async (req, res) => {
    try {

        const genres = await tmdbService.getGenres();

        res.status(200).json(genres);

    } catch (error) {

        res.status(error.response?.status || 500).json({
            message:
                error.response?.data?.status_message ||
                error.message
        });
    }
};

export default {
    getPopularMovies,
    searchMovies,
    getMovieDetails,
    discoverMovies,
    getGenres

};