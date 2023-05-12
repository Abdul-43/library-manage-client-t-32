import React, { useState, useEffect } from 'react';
import {  Routes, Route, Link } from 'react-router-dom';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import './App.css';
import { fetchBooks, createBook, updateBook, deleteBook } from './Api.js';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const navigate=useNavigate();
  useEffect(() => {
    fetchBooksData();
  }, []);

  const fetchBooksData = async () => {
    const data = await fetchBooks();
    setBooks(data);
  };

  const handleCreateBook = async (values) => {
    const newBook = { ...values, id: Date.now() };
    const createdBook = await createBook(newBook);
    if (createdBook) {
      setBooks([...books, createdBook]);
      alert("Book created")
    }
  };

  const handleUpdateBook = async (values) => {
    const updatedBook = { ...values, id: selectedBook.id };
    const updatedBookData = await updateBook(updatedBook);
    if (updatedBookData) {
      const updatedBooks = books.map((book) =>
        book.id === updatedBookData.id ? updatedBookData : book
      );
      setBooks(updatedBooks);
    }
    setSelectedBook(null);
    navigate("/")
  };

  const handleDeleteBook = async (bookId) => {
    await deleteBook(bookId);
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
    fetchBooksData();
  };

  const handleEditBook = (book) => {
    console.log(book)
    setSelectedBook(book);
    navigate(`/edit-book/${book.id}`)
  };

  return (
      <div className="container ">
        <h1 className="my-4 text-center">Library Management</h1>
        <nav className="mb-4">
          <ul className="nav nav-pills">
            <li className="nav-item ">
              <Link to="/" className="nav-link "
                aria-current="page">
                Book List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add-book" className="nav-link">
                Add Book
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/"
            element={<BookList
              books={books}
              onDelete={handleDeleteBook}
              onEdit={handleEditBook}
            />
            }
          />
          <Route path="/add-book"
            element={<BookForm
              initialValues={{ title: '', author: '' }}
              onSubmit={handleCreateBook}
            />}
          />
          <Route path="/edit-book/:id"
            element={<BookForm
              initialValues={selectedBook || { title: '', author: '' }}
              onSubmit={handleUpdateBook}
            />}
          />
        </Routes>
      </div>

  );
};

export default App;

