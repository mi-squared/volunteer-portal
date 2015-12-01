import {createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function makeStore(initialState) {
    return createStoreWithMiddleware(reducer, initialState);
};
