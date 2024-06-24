const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  comments: { type: [String], default: [] },
});

bookSchema.virtual('commentcount').get(function() {
  return this.comments.length;
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;