const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;
const dotenv = require('dotenv').config();
const color = require('colors');

// DB CONNECTION
const connectDB = require('./config/db');
connectDB();

// MIDDLE WARE
// for req.body
app.use(express.json()); 
// for req.parmas later change extended true for picture upload 
app.use(express.urlencoded({ extended : false })); 

// ROUTES
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/items', require('./routes/itemRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

// LISTEN
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`.magenta.underline));