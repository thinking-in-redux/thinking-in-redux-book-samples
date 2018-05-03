import {createStore, compose, combineReducers} from 'redux';
import {DevTools} from '../ui/DevTool'
import { booksReducer } from './reducers/books.reducer';

const rootReducer = combineReducers({
  books: booksReducer
})

const enhancer = compose(  
  DevTools.instrument()
);

export const store = createStore( rootReducer, {}, enhancer );
