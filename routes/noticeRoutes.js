const express = require('express');
const { createNotice, getAllNotices } = require('../controllers/noticeController');
const {verifyToken} = require('../middleware/authMidlleware');

const noticeRouter = express.Router();
// Middleware to ensure authentication for notice-related routes
noticeRouter.use(verifyToken);

// Route for creating a notice
noticeRouter.post('/notices',createNotice);

// Route for reading all notices (with optional category filter)
noticeRouter.get('/notices', getAllNotices);

// Additional routes for updating and deleting notices can be added here

module.exports = {noticeRouter};
