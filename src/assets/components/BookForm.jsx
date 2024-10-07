import React, { useState } from 'react';

const BookForm = ({ book = {}, onSave }) => {
  const [formData, setFormData] = useState({
    title: book.title || '',
    author: book.author || '',
    genre: book.genre || '',
    publicationDate: book.publicationDate || '',
    description: book.description || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="p-2 border rounded mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Author"
        value={formData.author}
        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
        className="p-2 border rounded mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Genre"
        value={formData.genre}
        onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
        className="p-2 border rounded mb-2 w-full"
      />
      <input
        type="date"
        value={formData.publicationDate}
        onChange={(e) => setFormData({ ...formData, publicationDate: e.target.value })}
        className="p-2 border rounded mb-2 w-full"
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        className="p-2 border rounded mb-2 w-full"
      />
      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        Save Book
      </button>
    </form>
  );
};

export default BookForm;
