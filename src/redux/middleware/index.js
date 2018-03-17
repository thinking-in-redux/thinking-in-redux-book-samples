import {combineEpics, createEpicMiddleware} from 'redux-observable';

const rootMiddleware = combineEpics();

export const epicMiddleware =  createEpicMiddleware(rootMiddleware);
