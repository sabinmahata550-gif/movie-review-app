import jwtService from "../utils/jwt.js";

const authMiddleware = (req, res, next) => {
    try {
        const token = req.cookies.authToken;
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated."
            });
        }

        const decoded = jwtService.verifyToken(token);
        req.user = decoded;

        next();

    } catch (error) {
        console.log(error)
        return res.status(401).json({
            message: "Invalid or expired token."
        });
    }
};

export default authMiddleware;