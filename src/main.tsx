import React from 'react'
import TodoList from "./components/todo-list"
import TodoNew from "./components/todo-new"
import './styles/index.scss'
const Main = () => {
    return (
        <div className="main">
            <div className='container'>
                <TodoNew/>
                <TodoList/>
            </div>
        </div>
    )
}

export default Main