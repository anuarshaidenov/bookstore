import { createStore, combineReducers } from 'redux';
import booksReducer from './books/books';

const combinedReducers = combineReducers({
  books: booksReducer,
});

const store = createStore(combinedReducers);

export default store;
