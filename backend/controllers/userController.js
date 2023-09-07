const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// generate JWT : https://jwt.io/
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '7d' // expired in 7 days
    })
}

// @desc Register new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password} = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
        res.status(400);
        throw new Error('User already exists');
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id)
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});


// @desc Login  user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id)
        })
    } else {
        res.status(400);
        throw new Error('Invalid credentials');
    }
})

// @desc Get user data
// @route GET /api/users/me
// @access Private
const getMe = asyncHandler( async (req, res) => {
    // get req.user from authMiddleware
    res.status(200).json(req.user);
})

module.exports = {
    registerUser,
    loginUser,
    getMe
}