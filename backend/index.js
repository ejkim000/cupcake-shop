const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;
const dotenv = require('dotenv').config();
const color = require('colors');

// DB CONNECTION
const connectDB = require('./config/db');
connectDB();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`.magenta.underline));