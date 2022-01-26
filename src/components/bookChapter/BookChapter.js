import './book-chapter.scss';

const BookChapter = () => (
  <div className="book-chapter">
    <span className="book-chapter__current">Current Chapter</span>
    <span className="book-chapter__number">Chapter 17</span>
    <button className="btn-secondary" type="button">
      Update Progress
    </button>
  </div>
);

export default BookChapter;
