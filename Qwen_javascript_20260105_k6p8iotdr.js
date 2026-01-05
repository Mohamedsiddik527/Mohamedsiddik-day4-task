const mongoose = require('mongoose');

const borrowSchema = new mongoose.Schema({
  book: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Book', 
    required: true 
  },
  borrowerName: { type: String, required: true },
  borrowDate: { type: Date, default: Date.now },
  dueDate: { type: Date, required: true },
  returned: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('BorrowRecord', borrowSchema);