import React from 'react';

function BookList({ books }) {
  return (
    <div className="book-list">
      <h2>Alle bøker</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;