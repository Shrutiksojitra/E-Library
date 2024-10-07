import React from 'react';
import { useParams } from 'react-router-dom';
import BookDetail from '../components/BookDetail';


const sampleBooks = [
  {
    id: 1,
    title: 'Goa',
    author: 'Scout op',
    genre: 'Not',
    publicationDate: '1925-04-10',
    description: 'lorem ispem lorem ispem lorem ispem lorem ispem lorem ispem ',
  },
  {
    id: 2,
    title: 'Movie',
    author: 'Jhonathan ',
    genre: 'Not',
    publicationDate: '1960-07-11',
    description: 'lorem ispem lorem ispem lorem ispem lorem ispem lorem ispem',
  },
  
];

const BookPage = () => {
  const { id } = useParams(); 
  const bookId = parseInt(id, 10); 

 
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
