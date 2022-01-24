import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';

const combinedReducers = combineReducers({
  books: booksReducer,
});

const store = createStore(combinedReducers, applyMiddleware(logger));

export default store;
