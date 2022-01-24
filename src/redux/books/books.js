const ADD_BOOK = 'book/addBook';
const REMOVE_BOOK = 'book/removeBook';

const initialState = [
  {
    id: 1,
    name: 'harry potter',
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
