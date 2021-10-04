import React from 'react'
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { createTodo } from '../../redux/helper';

import { requestToAdd, requestToRemove, ActiveTask } from '../../redux/redux-saga/actions';
import { Actions } from '../../redux/redux-saga/types';
import {Trash, Edit, Check} from 'react-feather'
import './style.css'
import { AppState } from '../../redux/redux-saga/store';
import { Todo } from '../../redux/types';
import clsx from 'clsx';
import Modal from '../../components/modal/Modal';
//import clsx from 'classnames'
export default function Home() {
    const [value, setValue] = React.useState('')
    const [showModal, setShowModal] = React.useState(false);

    const dispatch = useDispatch<Dispatch<Actions>>()
    const todos = useSelector<AppState, Array<Todo>>(state => state.todos)
    console.log('Todos:', todos)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const todo = createTodo('saga_todo_', value)
        console.log("Testing:", todo)
        dispatch(requestToAdd(todo))
        setValue('')
    }
    return (
        <>
        <Modal onClose={()=>setShowModal(false)}
        show={showModal}
        />
        <div id="home_container">

            <header>
                <h1 id="logo">Task App</h1>
            </header>
            <section className="inputField">
                <form onSubmit={handleSubmit} autoComplete="off" className="input-group">
                    <label>Title</label>
                    <input type="text" required onChange={(e) => { setValue(e.target.value) }} value={value} />
                    <button id="add" type="submit" onClick={() => { }}>Add</button>
                </form>
            </section>
            <main className="container">

                <section className="table-container" id="data-content">
                    <div className="data-table">
                        <h2>My Todo List</h2>
                        {todos.map((todo => (
                            <div  key={todo.id} className={clsx(!todo.active ? "listCardCheked":"listCard")}>
                                <button className={clsx(!todo.active ? "checked " : "btn-check")} onClick={() => dispatch(ActiveTask(todo.id))}><Check size={18} color="#FFF"/></button>
                                
                                <h2  className="list" >{todo.title}</h2>
                                <div className="buttons-container">
                                    <button className="btn-edit" onClick={()=>setShowModal(true)}><Edit size={18} color="#FFF"/> </button>
                                    <button className="btn-delete" value="delete" onClick={() => dispatch(requestToRemove(todo.id))}><Trash size={18} color="#FFF"/></button>
                                </div>
                            </div>
                        )))}
                    </div>

                </section>
                <footer>
                    Horacio Sapato
                </footer>
            </main>
        </div>
        </>
    )
}
