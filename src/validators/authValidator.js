import { z } from "zod";

import {
    EMAIL_REGEX,
    PASSWORD_REGEX
} from "../constants/regex.js";

export const registerSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must not exceed 50 characters"),

    email: z
        .string()
        .trim()
        .regex(EMAIL_REGEX, "Invalid email address"),

    password: z
        .string()
        .regex(
            PASSWORD_REGEX,
            "Password must contain at least 6 characters, one uppercase, one lowercase, and one number"
        )
});

export const loginSchema = z.object({
    email: z
        .string()
        .trim()
        .regex(EMAIL_REGEX, "Invalid email address"),

    password: z
        .string()
        .min(1, "Password is required")
});