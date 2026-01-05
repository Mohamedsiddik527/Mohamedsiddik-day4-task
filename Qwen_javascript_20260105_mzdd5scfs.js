const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add new book
router.post('/', async (req, res) => {
  const book = new Book(req.body);
  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update book availability
router.patch('/:id/availability', async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      { available: req.body.available },
      { new: true }
    );
    res.json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;