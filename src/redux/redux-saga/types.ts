import  * as constants from './sagaconstants';
import { Todo } from '../types';

export interface RequestToAdd {
    type: constants.REQUEST_TO_ADD
    todo: Todo
}

export interface RequestToRemove {
    type: constants.REQUEST_TO_REMOVE_TASK
    id: string
}

export interface SetActiveTask {
    type: constants.ACTIVE_TASK
    id: string
}
export interface EditTask {
    type: constants.EDIT_TASK
    id: string
}

export type Actions = RequestToAdd | RequestToRemove | SetActiveTask | EditTask