/* eslint-disable camelcase */
import './book-single.scss';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/thunk';
import BookInfo from '../bookInfo/BookInfo';
import BookProgress from '../bookProgress/BookProgress';
import BookChapter from '../bookChapter/BookChapter';

const BookSingle = (book) => {
  const {
    book: { item_id, title, category },
  } = book;

  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(item_id));
  };

  return (
    <li className="book-single">
      <div className="book-single__info">
        <BookInfo
          category={category}
          title={title}
          handleRemoveBook={handleRemoveBook}
        />
        <BookProgress progress={64} />
      </div>
      <BookChapter />
    </li>
  );
};

BookSingle.propTypes = {
  book: PropTypes.shape({ id: PropTypes.string, title: PropTypes.string })
    .isRequired,
};

export default BookSingle;
