const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const {authRouter} = require('./routes/authRoutes');
const {noticeRouter} = require('./routes/noticeRoutes');


const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URL;

// Middleware to parse JSON in request bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect(`${process.env.MONGODB_URL}/evaluationbackend`)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Routes
app.use('/auth', authRouter); // Routes for user authentication
app.use('/api', noticeRouter); // Routes for notices (protected by authMiddleware)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
