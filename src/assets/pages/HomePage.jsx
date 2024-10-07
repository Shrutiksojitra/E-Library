import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import { Link } from 'react-router-dom';

// Sample Data (Replace with API calls if needed)
const sampleBooks = [
  {
    id: 1,
    title: 'Goa trip ',
    author: 'Me and Brother',
    genre: 'Not',
    publicationDate: '1925-04-10',
    isBorrowed: false,
  },
  {
    id: 2,
    title: 'Movie Plan',
    author: 'Me and Brother',
    genre: 'Not',
    publicationDate: '1925-04-10',
    isBorrowed: true,
  },

];

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
   
    setBooks(sampleBooks);
  }, []);

  const handleBorrow = (book) => {
   
    setBooks(
      books.map((b) => (b.id === book.id ? { ...b, isBorrowed: true } : b))
    );
  };

  const handleReturn = (book) => {
  
    setBooks(
      books.map((b) => (b.id === book.id ? { ...b, isBorrowed: false } : b))
    );
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">E-Library</h1>
        <Link
          to="/add-book"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Add New Book
        </Link>
      </div>

      <BookList books={books} onBorrow={handleBorrow} onReturn={handleReturn} />
    </div>
  );
};

export default HomePage;
