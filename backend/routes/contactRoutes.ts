import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// Submit a contact message
router.post('/', async (req, res) => {
  const contact = new Contact(req.body);
  try {
    const newContact = await contact.save();
    res.status(201).json({ message: 'Message sent successfully', data: newContact });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

// Get all messages (admin only - placeholder)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
