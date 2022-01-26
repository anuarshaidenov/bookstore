import './book-list.scss';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../../redux/books/thunk';

import BookSingle from '../bookSingle/BookSingle';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <ul className="book-list">
      {!books.length
        ? 'No books found'
        : books.map((book) => <BookSingle key={book.item_id} book={book} />)}
    </ul>
  );
};

export default BookList;
