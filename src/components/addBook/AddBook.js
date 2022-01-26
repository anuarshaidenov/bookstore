import './add-book.scss';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBook } from '../../redux/books/thunk';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const clearInputTitle = () => setTitle('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = { item_id: uuidv4(), title, category };
    dispatch(addBook(newBook));
    clearInputTitle();
  };

  return (
    <form onSubmit={handleSubmit} className="add-book">
      <input
        className="add-book__input add-book__input--title"
        type="text"
        value={title}
        onChange={handleTitleChange}
        name="title"
        placeholder="Book title"
      />
      <select
        value={category}
        className="add-book__input add-book__input--category"
        onChange={handleCategoryChange}
        name="category"
      >
        <option value="">Please select a category</option>
        <option value="Fiction">Fiction</option>
        <option value="Romance">Romance</option>
      </select>
      <button className="btn-primary add-book__btn" type="submit">
        Add book
      </button>
    </form>
  );
};

export default AddBook;
