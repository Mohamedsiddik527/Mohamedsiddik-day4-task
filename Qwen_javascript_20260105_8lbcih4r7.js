import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

// Book operations
export const getBooks = () => api.get('/books');
export const addBook = (book) => api.post('/books', book);
export const updateBookAvailability = (id, available) => 
  api.patch(`/books/${id}/availability`, { available });

// Borrow operations
export const borrowBook = (record) => api.post('/borrows', record);
export const returnBook = (id) => api.patch(`/borrows/${id}/return`);
export const getBorrowRecords = () => api.get('/borrows');