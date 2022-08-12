import React from 'react';
import TodoList from "./components/todo-list";
import TodoNew from "./components/todo-new";
const Main = () => {
    return (
        <div className="App">
            <TodoNew/>
            <TodoList/>
        </div>
    );
}

export default Main;