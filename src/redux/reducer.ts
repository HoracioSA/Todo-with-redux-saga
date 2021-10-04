import { State, Actions } from './types';

export const ADD = "ADD"
export type ADDTD = typeof ADD

export const REMOVE = "REMOVE"
export type REMOVETD = typeof REMOVE

export const TOGGLE = "TOGGLE"
export type TOGGLETD = typeof TOGGLE
export const initialState: State = {
    todos: []
}

export const reducer = (state = initialState, action: Actions): State => {
    switch(action.type){
        case ADD:
            return {
                todos: [action.todo, ...state.todos]
            }
        case REMOVE:
            return { 
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        case TOGGLE:
            return { 
                todos: state.todos.map(todo => 
                    todo.id === action.id 
                    ? {...todo, active: !todo.active} 
                    : todo 
                )
            }
        default:
            return state
    }
}