import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';

const BookList = ({ books, onDelete, onEdit }) => {
  return (
    <ListGroup>
      {books.map((book) => (
        <ListGroupItem key={book.id}>
          <div>Title: {book.title}</div>
          <div>Author: {book.author}</div>
          {/* Display more book details as needed */}
          <Button variant="danger" className="me-2" onClick={() => onDelete(book.id)}>Delete</Button>
          <Button variant="secondary" onClick={() => onEdit(book)}>Edit</Button>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default BookList;
