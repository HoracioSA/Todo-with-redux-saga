
import { type } from 'os';
import { Add, Remove, Toggle, Todo, Edit } from './types';

export const ADD = "ADD"
export type ADDTD = typeof ADD

export const REMOVE = "REMOVE"
export type REMOVETD = typeof REMOVE

export const TOGGLE = "TOGGLE"
export type TOGGLETD = typeof TOGGLE

export const EDIT_TASK= "EDIT"
export type EDIT_TAS= typeof EDIT_TASK

export const add = (todo: Todo): Add => ({ type: ADD, todo })
export const remove = (id: string): Remove => ({ type: REMOVE, id })
export const toggle = (id: string): Toggle => ({ type: TOGGLE, id })
export const edit = (id: string): Edit => ({ type: EDIT_TASK, id })


