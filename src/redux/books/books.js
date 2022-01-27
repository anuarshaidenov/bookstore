const LOAD_BOOKS = 'bookStore/books/LOAD_BOOKS';
const GET_BOOKS_SUCCESS = 'bookStore/books/GET_BOOKS_SUCCESS';
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = {
  books: [],
  isLoading: false,
};

export const loadBooksAction = (payload) => ({
  type: LOAD_BOOKS,
  payload,
});

export const getBooksAction = (payload) => ({
  type: GET_BOOKS_SUCCESS,
  payload,
});

export const addBookAction = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBookAction = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return { ...state, isLoading: action.payload };
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.payload] };
    case REMOVE_BOOK:
      return {
        ...state,
        books: [
          ...state.books.filter((book) => book.item_id !== action.payload),
        ],
      };
    case GET_BOOKS_SUCCESS:
      return { ...state, books: [...action.payload] };
    default:
      return state;
  }
};

export default reducer;
