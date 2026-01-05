import React, { useState } from 'react';
import { addBook } from '../services/api';

export default function BookForm({ onAdd }) {
  const [book, setBook] = useState({ title: '', author: '', isbn: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addBook(book);
      onAdd();
      setBook({ title: '', author: '', isbn: '' });
    } catch (err) {
      alert('Error adding book');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input
        placeholder="Title"
        value={book.title}
        onChange={(e) => setBook({...book, title: e.target.value})}
        required
      />
      <input
        placeholder="Author"
        value={book.author}
        onChange={(e) => setBook({...book, author: e.target.value})}
        required
      />
      <input
        placeholder="ISBN"
        value={book.isbn}
        onChange={(e) => setBook({...book, isbn: e.target.value})}
      />
      <button type="submit">Add Book</button>
    </form>
  );
}