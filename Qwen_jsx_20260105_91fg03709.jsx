import React from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import './App.css';

function App() {
  const [booksUpdated, setBooksUpdated] = useState(false);

  const handleAddBook = () => {
    setBooksUpdated(prev => !prev);
  };

  return (
    <div className="app">
      <h1>Simple Library Manager</h1>
      <BookForm onAdd={handleAddBook} />
      <BookList key={booksUpdated} />
    </div>
  );
}

export default App;