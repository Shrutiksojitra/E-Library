import React from 'react';
import { useParams } from 'react-router-dom';
import BookDetail from '../components/BookDetail';

// Sample Data (Replace with API calls if needed)
const sampleBooks = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classics',
    publicationDate: '1925-04-10',
    description: 'A novel about the American dream and the roaring twenties.',
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    publicationDate: '1960-07-11',
    description: 'A novel about racial injustice in the American South.',
  },
  // Add more sample books as necessary
];

const BookPage = () => {
  const { id } = useParams(); // Gets the book ID from the URL
  const bookId = parseInt(id, 10); // Convert the id string to a number

  // Find the book by ID (this would be fetched from an API in a real-world app)
  const book = sampleBooks.find((b) => b.id === bookId);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <BookDetail book={book} />
    </div>
  );
};

export default BookPage;
