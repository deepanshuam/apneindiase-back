import express from 'express';
import upload from '../middleware/Multer.js'; // Ensure correct path to your multer middleware

const router = express.Router();

// POST route for registration that also handles file upload
router.post('/register', upload, (req, res) => {
  try {
    // Check uploaded files
    console.log('Files uploaded:', req.files);

    // Continue with your business logic, like saving company data

    res.status(200).json({ message: 'Company registered successfully', data: req.body });
  } catch (err) {
    res.status(500).json({ message: 'Error registering company', error: err.message });
  }
});

export default router;
