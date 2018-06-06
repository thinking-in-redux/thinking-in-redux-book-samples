import {DevTools} from '../ui/DevTool'
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {booksReducer} from './reducers/books.reducer';
import {booksMiddleware} from './middleware/feature/books';
import {apiMiddleware} from './middleware/core/api';
import {uiReducer} from "./reducers/ui.reducer";
import {notificationsReducer} from "./reducers/notification.reducer";
import {normalizeMiddleware} from "./middleware/core/normalize";
import {notificationMiddleware} from "./middleware/core/notification";
import {loggerMiddleware} from "./middleware/core/logger";
import {actionSplitterMiddleware} from "./middleware/core/actionSplitter";
import {undoable} from "./reducerEnhancers/undoable";
import {stateFreezer} from "./reducerEnhancers/stateFreezer";

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
