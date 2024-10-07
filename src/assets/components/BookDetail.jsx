const BookDetail = ({ book }) => (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Publication Date: {book.publicationDate}</p>
      <p>{book.description}</p>
    </div>
  );
  
  export default BookDetail;
  