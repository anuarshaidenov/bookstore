import './add-book.scss';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBook } from '../../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const clearInputTitle = () => setTitle('');

  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = { id: uuidv4(), title };
    dispatch(addBook(newBook));
    clearInputTitle();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        name="title"
        placeholder="Book Title"
      />
      <select name="category">
        <option value="">Please select a category</option>
      </select>
      <button type="submit">Add book</button>
    </form>
  );
};

export default AddBook;
