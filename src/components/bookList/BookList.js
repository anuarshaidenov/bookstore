import './book-list.scss';

import { TailSpin } from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../../redux/books/thunk';

import BookSingle from '../bookSingle/BookSingle';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const isLoading = useSelector((state) => state.books.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const displayBooks = () => (books.length ? (
    books.map((book) => <BookSingle key={book.item_id} book={book} />)
  ) : (
    <span className="book-list__message">No books found</span>
  ));

  return (
    <ul className="book-list">
      {!isLoading ? (
        displayBooks()
      ) : (
        <TailSpin color="#0290ff" height={80} width={80} />
      )}
    </ul>
  );
};

export default BookList;
