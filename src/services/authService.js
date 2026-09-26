import User from "../models/User.js";
import bcrypt from "bcrypt";

const registerUser = async (data) => {
    const { email, password } = data;

    const user = await User.findOne({ email });

    if (user) {
        throw {
            status: 400,
            message: "User already exist."
        };
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
        ...data,
        password: hashPassword
    });
    return {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        isActive: newUser.isActive,
    };
};

const loginUser = async (data) => {
    const { email, password } = data;

    const user = await User.findOne({ email });

    if (!user) {
        throw {
            status: 400,
            message: "User not found."
        };
    }

    if (!user.isActive) {
        throw {
            status: 403,
            message: "Your account is inactive."
        };
    }

    const matchPassword = await bcrypt.compare(
        password,
        user.password
    );

    if (!matchPassword) {
        throw {
            status: 400,
            message: "Invalid email or password."
        };
    }

    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isActive: user.isActive,
    };
};

export default {
    registerUser,
    loginUser
};