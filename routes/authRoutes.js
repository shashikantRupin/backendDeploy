const express = require('express');
const authController = require('../controllers/authControllers');
const authRouter = express.Router();
// Middleware to parse JSON in request bodies
authRouter.use(express.json());
// Route for user registration
authRouter.post('/register', authController.register);

// Route for user login
authRouter.post('/login', authController.login);

module.exports = {authRouter};
