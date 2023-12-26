const {Notice} = require('../models/notice');

const createNotice = async (req, res) => {
  try {
    const { title, body, category } = req.body;
    const userId = req.user.id; // Assuming you have middleware to get user from token
    
    const newNotice = new Notice({
      title,
      body,
      category,
      user: userId,
    });

    await newNotice.save();

    res.status(201).json({ message: 'Notice created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Notice creation failed' });
  }
};

const getAllNotices = async (req, res) => {
  try {
    let query = {};
    if (req.query.category) {
      query.category = req.query.category;
    }
    
    const notices = await Notice.find(query).populate('user', 'name email');
    
    res.status(200).json({ notices });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch notices' });
  }
};

// Other CRUD operations for notices (update and delete) should be implemented similarly

module.exports = { createNotice, getAllNotices };
