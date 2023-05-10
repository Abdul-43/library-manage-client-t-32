import React, { useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleCreateBook = (values) => {
    const newBook = { ...values, id: Date.now() };
    setBooks([...books, newBook]);
  };

  const handleUpdateBook = (values) => {
    const updatedBooks = books.map((book) =>
      book.id === selectedBook.id ? { ...book, ...values } : book
    );
    setBooks(updatedBooks);
    setSelectedBook(null);
  };

  const handleDeleteBook = (bookId) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
  };

  const handleEditBook = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className='app '>
      <div className="container">
        <h1 className="my-4 text-center">Library Management</h1>

        {/* Book form */}
        <div className="card mb-4">
          <div className="card-body">
            <h2 className="card-title text-center">{selectedBook ? 'Edit Book' : 'Add Book'}</h2>
            <BookForm
              initialValues={selectedBook || { title: '', author: '' }}
              onSubmit={selectedBook ? handleUpdateBook : handleCreateBook}
            />
          </div>
        </div>

        {/* Book list */}
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center">Books</h2>
            <BookList
              books={books}
              onDelete={handleDeleteBook}
              onEdit={handleEditBook}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
