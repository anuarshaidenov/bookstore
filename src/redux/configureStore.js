import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';

const combinedReducers = combineReducers({
  books: booksReducer,
});

const middlewares = [logger, thunk];

const store = createStore(combinedReducers, applyMiddleware(...middlewares));

export default store;
