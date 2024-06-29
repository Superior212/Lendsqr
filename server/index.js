const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoute = require('./routes/user.route');
const port = process.env.PORT || 3000;
const URI = process.env.URI;

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', userRoute);



mongoose.connect(URI)
    .then(() => {
        console.log('Connected!')
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
    }).catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });