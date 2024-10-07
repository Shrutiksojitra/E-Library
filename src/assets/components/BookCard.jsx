const BookCard = ({ book, onBorrow, onReturn }) => (
    <div className="border rounded-lg p-4 bg-white shadow-md">
      <h3 className="text-xl font-semibold">{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Published: {book.publicationDate}</p>
      {book.isBorrowed ? (
        <button onClick={() => onReturn(book)} className="bg-red-500 text-white p-2 mt-2">
          Return Book
        </button>
      ) : (
        <button onClick={() => onBorrow(book)} className="bg-blue-500 text-white p-2 mt-2">
          Borrow Book
        </button>
      )}
    </div>
  );
  export default BookCard;
  