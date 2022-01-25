import './book-list.scss';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../../redux/books/thunk';

import BookSingle from '../bookSingle/BookSingle';

const BookList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

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
