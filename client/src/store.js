import {createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './reducer';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware //remove in production
)(createStore);

export default function makeStore(initialState) {
    return createStoreWithMiddleware(reducer, initialState);
};
