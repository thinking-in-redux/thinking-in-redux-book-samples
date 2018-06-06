import {DevTools} from '../ui/DevTool'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { booksReducer } from './reducers/books.reducer';
import { booksMiddleware } from './middleware/books';
import { apiMiddleware } from './middleware/api';
import {uiReducer} from "./reducers/ui.reducer";
import {notificationsReducer} from "./reducers/notification.reducer";

// shape the state structure
const rootReducer = combineReducers({
  books: booksReducer,
  ui: uiReducer,
  notification: notificationsReducer
});

// create the feature middleware array
const featureMiddleware = [
  booksMiddleware
];

// create the core middleware array
const coreMiddleware = [
  apiMiddleware
];

// compose the middleware with additional (optional) enhancers,
// DevTools.instrument() will enable dev tools integration
const enhancer = compose(
  applyMiddleware(...featureMiddleware, ...coreMiddleware),
  DevTools.instrument()
);

// create and configure the store
export const store = createStore( rootReducer, {}, enhancer );
