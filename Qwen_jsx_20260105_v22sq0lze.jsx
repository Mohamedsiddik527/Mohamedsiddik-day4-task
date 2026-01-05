import React, { useState, useEffect } from 'react';
import { getBooks, updateBookAvailability } from '../services/api';
import BorrowForm from './BorrowForm';

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const { data } = await getBooks();
      setBooks(data);
    } catch (err) {
      console.error('Failed to fetch books');
    }
  };

  const handleBorrow = async (bookId) => {
    const book = books.find(b => b._id === bookId);
    if (!book.available) return alert('Book not available!');
    
    // Show borrow form
    setSelectedBook(book);
    
    // Update availability
    await updateBookAvailability(bookId, false);
    fetchBooks(); // Refresh list
  };

  const handleReturn = async (bookId) => {
    await updateBookAvailability(bookId, true);
    fetchBooks();
  };

  return (
    <div className="book-list">
      <h2>Books</h2>
      {books.map(book => (
        <div key={book._id} className="book-card">
          <h3>{book.title}</h3>
          <p>by {book.author}</p>
          <p className={book.available ? 'available' : 'unavailable'}>
            {book.available ? 'Available' : 'Borrowed'}
          </p>
          {book.available ? (
            <button onClick={() => handleBorrow(book._id)}>Borrow</button>
          ) : (
            <button onClick={() => handleReturn(book._id)}>Return</button>
          )}
        </div>
      ))}
      
      {selectedBook && (
        <BorrowForm 
          book={selectedBook} 
          onClose={() => setSelectedBook(null)} 
        />
      )}
    </div>
  );
}