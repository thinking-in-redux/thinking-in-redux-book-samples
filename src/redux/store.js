import {DevTools} from '../ui/DevTool'
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {booksReducer} from './reducers/books.reducer';
import {booksMiddleware} from './middleware/books';
import {apiMiddleware} from './middleware/api';
import {uiReducer} from "./reducers/ui.reducer";
import {notificationsReducer} from "./reducers/notification.reducer";
import {normalizeMiddleware} from "./middleware/normalize";
import {notificationMiddleware} from "./middleware/notification";
import {loggerMiddleware} from "./middleware/logger";
import {actionSplitterMiddleware} from "./middleware/actionSplitter";
import {undoable} from "./reducers/undoable";
import {stateFreezer} from "./reducers/stateFreezer";

// shape the state structure
const rootReducer = combineReducers({
  books: undoable(booksReducer),
  ui: uiReducer,
  notification: notificationsReducer
});

// create the feature middleware array
const featureMiddleware = [
  booksMiddleware
];

// create the core middleware array
const coreMiddleware = [
  actionSplitterMiddleware,
  apiMiddleware,
  normalizeMiddleware,
  notificationMiddleware,
  loggerMiddleware
];

// compose the middleware with additional (optional) enhancers,
// DevTools.instrument() will enable dev tools integration
const enhancer = compose(
  applyMiddleware(...featureMiddleware, ...coreMiddleware),
  DevTools.instrument()
);

// create and configure the store
export const store = createStore(stateFreezer(rootReducer), {}, enhancer);
