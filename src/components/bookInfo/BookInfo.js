import './book-info.scss';

import PropTypes from 'prop-types';

const BookInfo = ({ category, title, handleRemoveBook }) => (
  <div className="book-info">
    <span className="book-info__category">{category}</span>
    <h3 className="book-info__title">{title}</h3>
    <span className="book-info__author">Author</span>
    <ul className="book-info__actions">
      <li className="book-info__li">
        <span className="book-info__action not-allowed">Comments</span>
      </li>
      <li className="book-info__li">
        <button
          className="book-info__action"
          type="button"
          onClick={handleRemoveBook}
        >
          Remove
        </button>
      </li>
      <li className="book-info__li">
        <span className="book-info__action not-allowed">Edit</span>
      </li>
    </ul>
  </div>
);

BookInfo.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default BookInfo;
