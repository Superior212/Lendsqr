const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
require('dotenv').config();

const userRoute = require('./routes/user.route');
const port = process.env.PORT || 3000;
const URI = process.env.URI;

const app = express();

// Middleware to parse JSON and URL-encoded bodies
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Routes
app.use('/api', userRoute);


// Define Lambda handler function
exports.handler = async (event, context) => {
    // Sample Lambda function logic
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Hello from Lambda!' }),
    };
};
// Connect to MongoDB

mongoose.connect(URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`connected to database & Server is running on port: ${port}`);
        })
    })
    .catch((error) => {
        console.log(error);
    })
    ;