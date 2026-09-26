import express from "express";

import authController from "../controllers/authController.js";
import validate from "../middlewares/validate.js";

import {
    registerSchema,
    loginSchema
} from "../validators/authValidator.js";

const router = express.Router();

router.post(
    "/register",
    validate(registerSchema),
    authController.registerUser
);

router.post(
    "/login",
    validate(loginSchema),
    authController.loginUser
);

export default router;