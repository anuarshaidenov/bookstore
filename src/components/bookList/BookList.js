import './book-list.scss';

import { useSelector } from 'react-redux';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <ul>
      {books.length && books.map((book) => <li key={book.id}>{book.name}</li>)}
    </ul>
  );
};

export default BookList;
