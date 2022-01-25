import './book-list.scss';

import { useSelector } from 'react-redux';

import BookSingle from '../bookSingle/BookSingle';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <ul>
      {!books.length
        ? 'No books found'
        : books.map((book) => <BookSingle key={book.id} book={book} />)}
    </ul>
  );
};

export default BookList;
