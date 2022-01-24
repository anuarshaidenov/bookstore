import './book-single.scss';
import PropTypes from 'prop-types';

const BookSingle = ({ title }) => <li>{title}</li>;

BookSingle.propTypes = { title: PropTypes.string.isRequired };

export default BookSingle;
