import axios from "axios";
import config from "../config/config.js";

const tmdbApi = axios.create({
    baseURL: config.baseURL,
    headers: {
        Authorization: `Bearer ${config.tmbAccessToken}`,
        accept: "application/json"
    }
});

const getPopularMovies = async () => {
    const response = await tmdbApi.get("/movie/popular");

    return response.data;
};

const searchMovies = async (query, page = 1) => {
    const response = await tmdbApi.get("/search/movie", {
        params: {
            query,
            page
        }
    });

    return response.data;
};

const getMovieDetails = async (movieId) => {
    const response = await tmdbApi.get(
        `/movie/${movieId}`
    );

    return response.data;
};

const getGenres = async () => {
    const response = await tmdbApi.get(
        "/genre/movie/list"
    );

    return response.data;
};

const discoverMovies = async (filters = {}) => {
    const params = {};

    // Genre
    if (filters.genre) {
        const genreData = await getGenres();

        const searchGenre = filters.genre
            .toLowerCase()
            .trim();

        let genre = genreData.genres.find(
            (item) =>
                item.name.toLowerCase() === searchGenre
        );

        if (!genre) {
            genre = genreData.genres.find(
                (item) =>
                    item.name
                        .toLowerCase()
                        .startsWith(searchGenre)
            );
        }

        if (!genre) {
            throw {
                status: 400,
                message: `Genre "${filters.genre}" not found.`
            };
        }

        params.with_genres = genre.id;
    }

    // Year
    if (filters.year) {
        params.primary_release_year = filters.year;
    }

    // Minimum Rating
    if (filters.minRating !== undefined) {
        params["vote_average.gte"] = filters.minRating;
    }

    // Language
    if (filters.language) {
        params.with_original_language = filters.language;
    }

    // Sort
    if (filters.sort) {
        params.sort_by = filters.sort;
    }

    // Page
    if (filters.page) {
        params.page = filters.page;
    }

    const response = await tmdbApi.get(
        "/discover/movie",
        { params }
    );

    let movies = response.data.results;

    // Limit
    if (filters.limit) {
        movies = movies.slice(
            0,
            Number(filters.limit)
        );
    }

    return {
        ...response.data,
        results: movies
    };
};

export default {
    getPopularMovies,
    searchMovies,
    getMovieDetails,
    discoverMovies,
    getGenres
};