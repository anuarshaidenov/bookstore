import './add-book.scss';

import { useState } from 'react';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const handleTitleChange = (e) => setTitle(e.target.value);

  return (
    <form>
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
