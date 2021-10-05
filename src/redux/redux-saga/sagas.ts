import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import { apiCall } from '../api';

import { add, remove, toggle, edit } from '../actions';


import { REQUEST_TO_ADD, REQUEST_TO_REMOVE_TASK, ACTIVE_TASK, EDIT_TASK} from './sagaconstants';
import { RequestToAdd, RequestToRemove, SetActiveTask, EditTask} from './types';



function* requestAddTodo(data: RequestToAdd) {
    try {
        
        yield call(apiCall)
        
        yield put(add(data.todo))  
        

       
    } catch(e:any) {
        console.error(e.message)
    }
}

function* requestRemoveTodo(data: RequestToRemove) {
    try {
        yield call(apiCall)
        yield put(remove(data.id))
    } catch(e:any) {
        console.error(e.message)
    }
}

function * requestToEditTask(data: EditTask){
    try {
        yield call(apiCall)
        yield put(edit(data.id))
    } catch (e:any) {
        console.error(e.message)
    }
}
function* requestToggleTodo(data: SetActiveTask) {
    try {
        yield call(apiCall)
        yield put(toggle(data.id))
    } catch(e:any) {
        console.error(e.message)
    }
}

function* watchAddTodo() {
    yield takeEvery(REQUEST_TO_ADD, requestAddTodo);
}

function* watchRemoveTodo() {
    yield takeEvery(REQUEST_TO_REMOVE_TASK, requestRemoveTodo);
}

function* watchEditTodo() {
    yield takeEvery(EDIT_TASK, requestToEditTask);
}

function* watchToggleTodo() {
    yield takeEvery(ACTIVE_TASK, requestToggleTodo);
}

const rootSaga = function* root() {
    yield all([
        fork(watchAddTodo),
        fork(watchRemoveTodo),
        fork(watchToggleTodo),
        fork(watchEditTodo)
    ])
}

export default rootSaga;