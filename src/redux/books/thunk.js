export const GET_BOOKS = 'bookStore/books/GET_BOOKS';
export const GET_BOOKS_SUCCESS = 'bookStore/books/GET_BOOKS_SUCCESS';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZZ0zy3Vi7YsuPgssital/books';

export const getBooks = () => async (dispatch) => {
  const res = await fetch(baseURL);
  const data = await res.json();

  const books = Object.entries(data).map(([id, bookData]) => {
    const { category, title } = bookData[0];
    return {
      id,
      category,
      title,
    };
  });
  dispatch({ type: GET_BOOKS_SUCCESS, payload: books });
};
