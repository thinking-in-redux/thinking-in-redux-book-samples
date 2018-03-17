import {createStore, compose, applyMiddleware} from 'redux';
import {DevTools} from '../ui/DevTool';
import {epicMiddleware} from "./middleware";
import {rootReducer} from "./reducers";

// compose store enhancers
const enhancer = compose(
  applyMiddleware(epicMiddleware),
  DevTools.instrument()
);

export const store = createStore( rootReducer, {}, enhancer);
