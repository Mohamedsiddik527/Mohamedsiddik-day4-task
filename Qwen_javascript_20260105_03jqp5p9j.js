const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookRoutes = require('./routes/books');
const borrowRoutes = require('./routes/borrows');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/librarydb')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('DB connection error:', err));

// Routes
app.use('/api/books', bookRoutes);
app.use('/api/borrows', borrowRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});