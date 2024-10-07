import React, { useState } from 'react';
import BookCard from './BookCard';

const BookList = ({ books, onBorrow, onReturn }) => {
  const [filters, setFilters] = useState({ genre: '', author: '', date: '' });

  const filteredBooks = books.filter((book) => {
    return (
      (filters.genre ? book.genre.includes(filters.genre) : true) &&
      (filters.author ? book.author.includes(filters.author) : true) &&
      (filters.date ? book.publicationDate.includes(filters.date) : true)
    );
  });

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by Genre"
          value={filters.genre}
          onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Filter by Author"
          value={filters.author}
          onChange={(e) => setFilters({ ...filters, author: e.target.value })}
          className="p-2 border rounded mx-2"
        />
        <input
          type="date"
          placeholder="Filter by Date"
          value={filters.date}
          onChange={(e) => setFilters({ ...filters, date: e.target.value })}
          className="p-2 border rounded"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} onBorrow={onBorrow} onReturn={onReturn} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
