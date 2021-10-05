import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Modal from './components/modal/Modal'
import Home from './pages/Home/Home'

export default function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/edit/:id" component={Modal}/>
        </BrowserRouter>
    )
}