import { persistStore, persistReducer, } from 'redux-persist'
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { reducer } from '../reducer';

import rootSaga from './sagas';

export type AppState = ReturnType<typeof reducer> 

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    sagaMiddleware
]
const persistConfig ={
    key: 'todos',
    storage
}

const store = createStore(reducer, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

store.subscribe(()=>{
    localStorage.setItem('testLocal', JSON.stringify(store.getState()))
  })



export default store;