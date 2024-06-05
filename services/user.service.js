const User = require('../models/User.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.createUser = async function (userData) {
    try {
        const hashedPassword = await bcrypt.hash(userData.password, 8);
        const newUser = new User({
            name: userData.name,
            lastName: userData.lastName,
            email: userData.email,
            password: hashedPassword,
            favoritos: userData.favoritos || [],
            verDespues: userData.verDespues || [],
            vistas: userData.vistas || []
        });

        const savedUser = await newUser.save();

        const token = jwt.sign({ id: savedUser._id }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });

        return token;
    } catch (e) {
        console.error("Error while creating user:", e); // Loguear el error para más detalles
        throw Error("Error while creating user");
    }
};

// Function to validate email
exports.validateMail = async function (user) {
    try {
        // Find the user by email
        const isMail = await User.findOne({ email: user.email });
        // If no user object exists return false
        return isMail ? true : false;
    } catch (e) {
        throw Error("Error occurred while finding the user");
    }
};

// Async function to login a user
exports.loginUser = async function (user) {
    try {
        // Find the user by email
        const _details = await User.findOne({ email: user.email });

        if (!_details) {
            throw Error("User not found");
        }

        // Validate the password
        const passwordIsValid = await bcrypt.compare(user.password, _details.password);

        if (!passwordIsValid) {
            return 0;
        }

        // Create a token
        const token = jwt.sign({
            id: _details._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });

        return { token: token, user: _details };
    } catch (e) {
        // Return an error message describing the reason
        console.log(e);
        throw Error("Error while logging in user");
    }
};
