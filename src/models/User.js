import mongoose from "mongoose";
import { USER_ROLE_ADMIN, USER_ROLE_USER } from "../constants/userRole.js";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            required: true,
        },

        role: {
            type: String,
            enum: [USER_ROLE_USER, USER_ROLE_ADMIN],
            default: USER_ROLE_USER,
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

export default User;