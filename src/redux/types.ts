
export interface Todo {
    id: string
    active: boolean,
    title: string
}

export const ADD = "ADD"
export type ADDTD = typeof ADD

export const REMOVE = "REMOVE"
export type REMOVETD = typeof REMOVE

export const TOGGLE = "TOGGLE"
export type TOGGLETD = typeof TOGGLE 
export const EDIT_TASK = "EDIT"
export type EDIT_TASKTD = typeof EDIT_TASK
export interface State {
    todos: Array<Todo>
}

export interface Add {
    type: ADDTD
    todo: Todo
}

export interface Remove {
    type: REMOVETD
    id: string
}

export interface Edit{
    type: EDIT_TASKTD
    id: string
}
export interface Toggle {
    type:TOGGLETD
    id: string
}

export type Actions = Add | Remove | Toggle | Edit