import {
  getBooksAction,
  addBookAction,
  removeBookAction,
  loadBooksAction,
} from './books';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZZ0zy3Vi7YsuPgssital/books';

export const getBooks = () => async (dispatch) => {
  dispatch(loadBooksAction(true));
  const res = await fetch(baseURL);
  const data = await res.json();

  const books = Object.entries(data).map(([id, bookData]) => {
    const { category, title } = bookData[0];
    return {
      item_id: id,
      category,
      title,
    };
  });
  dispatch(loadBooksAction(false));
  dispatch(getBooksAction(books));
};

export const addBook = (book) => async (dispatch) => {
  const res = await fetch(baseURL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });
  console.log(res);
  dispatch(addBookAction(book));
};

export const removeBook = (id) => async (dispatch) => {
  const res = await fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
  });

  console.log(res, id);

  dispatch(removeBookAction(id));
};
