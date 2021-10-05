import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { reducer } from '../reducer';

import rootSaga from './sagas';

export type AppState = ReturnType<typeof reducer> 

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    sagaMiddleware
]
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')): {}
const store = createStore(reducer, compose(applyMiddleware(...middlewares)));
localStorage.setItem('reduxState', JSON.stringify(store.getState()))
sagaMiddleware.run(rootSaga);

export default store;