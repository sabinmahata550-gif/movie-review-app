import authService from "../services/authService.js";
import jwt from "../utils/jwt.js";
const registerUser = async (req, res) => {
    try {
        const input = req.body;

        const user = await authService.registerUser(input);
        res.status(201).json({
            message: "User registered successfully.",
            user
        });

    } catch (error) {
        res.status(error.status || 500).json({
            message: error.message || "Something went wrong."
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const input = req.body;

        const user = await authService.loginUser(input);
    

        const token = await jwt.generateToken(user);
        res.cookie("authToken", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        res.status(200).json({
            message: "User logged in successfully.",
            user,
            token
        });

    } catch (error) {
        res.status(error.status || 500).json({
            message: error.message || "Something went wrong."
        });
    }
};

export default {
    registerUser,
    loginUser
};