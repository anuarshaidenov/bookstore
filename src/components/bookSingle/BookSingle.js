import './book-single.scss';
import PropTypes from 'prop-types';

const BookSingle = (book) => {
  const {
    book: { title },
  } = book;

  return <li>{title}</li>;
};

BookSingle.propTypes = {
  book: PropTypes.shape({ title: PropTypes.string }).isRequired,
};

export default BookSingle;
