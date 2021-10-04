import { Todo } from '../types';
import { RequestToAdd, RequestToRemove, SetActiveTask, EditTask as EditTodo } from './types';


 const REQUEST_TO_ADD = "REQUEST_TO_ADD"
type REQUEST_TO_ADD = typeof REQUEST_TO_ADD

 const REMOVE_TASK = "REMOVE"
type REMOVE_TASK = typeof REMOVE_TASK

 const ACTIVE_TASK = "ACTIVE_TASK"
type ACTIVE_TASK = typeof ACTIVE_TASK
const EDIT_TASK="EDIT_TASK"
type EDIT_TASK = typeof EDIT_TASK

export const requestToAdd = (todo: Todo): RequestToAdd => ({ type: REQUEST_TO_ADD, todo })
export const requestToRemove = (id: string): RequestToRemove => ({ type: REMOVE_TASK, id })
export const ActiveTask = (id: string): SetActiveTask => ({ type: ACTIVE_TASK, id })
export const EditTask = (id: string): EditTodo => ({ type: EDIT_TASK, id })
