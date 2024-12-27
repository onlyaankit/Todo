import bcrypt from 'bcrypt';
import User from "../models/user.model.js";

// Function to register a new user
export const register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        // Validate required fields
        if (!fullName || !email || !password) {
            return res.status(403).json({
                success: false,
                message: "All fields are required."
            });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(403).json({
                success: false,
                message: "Email already exists."
            });
        }

        // Hash the user's password for security
        const hashPassword = await bcrypt.hash(password, 10);

        // Create a new user in the database
        await User.create({
            fullName,
            email,
            password: hashPassword
        });

        return res.status(200).json({
            success: true,
            message: "User created successfully."
        });
    } catch (error) {
        console.error("Error in user registration:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong during registration."
        });
    }
};

// Function to log in an existing user
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate required fields
        if (!email || !password) {
            return res.status(403).json({
                success: false,
                message: "All fields are required."
            });
        }

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(403).json({
                success: false,
                message: "Incorrect email."
            });
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(403).json({
                success: false,
                message: "Incorrect password."
            });
        }

        // Successful login response
        return res.status(200).json({
            success: true,
            message: `Welcome ${user.fullName}`
        });
    } catch (error) {
        console.error("Error in user login:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong during login."
        });
    }
};
