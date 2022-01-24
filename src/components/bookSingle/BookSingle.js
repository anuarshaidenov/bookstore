import './book-single.scss';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const BookSingle = (book) => {
  const {
    book: { id, title },
  } = book;

  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <li>
      {title}
      <button onClick={handleRemoveBook} type="button">
        remove
      </button>
    </li>
  );
};

BookSingle.propTypes = {
  book: PropTypes.shape({ id: PropTypes.string, title: PropTypes.string })
    .isRequired,
};

export default BookSingle;
