import './books.scss';

import AddBook from '../../components/addBook/AddBook';
import BookList from '../../components/bookList/BookList';

const Books = () => (
  <div>
    <h1>books</h1>
    <BookList />
    <AddBook />
  </div>
);
export default Books;
