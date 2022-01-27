import './books.scss';

import AddBook from '../../components/addBook/AddBook';
import BookList from '../../components/bookList/BookList';

const Books = () => (
  <div className="books">
    <BookList />
    <h2 className="heading books__heading">Add new book</h2>
    <AddBook />
  </div>
);
export default Books;
