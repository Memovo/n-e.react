import React from 'react'
import { Button, Input } from 'antd'
import '../../styles/todo-new.scss'

const TodoNew = () => {

    const addTodo = () => {
        console.log('add')
    }

    return (
        <div className="todo-new">
            <Input type="text" style={{ flex: 1, marginRight: 10 }} />
            <Button style={{ width: 80 }} onClick={addTodo}>Add Todo</Button>
        </div>
    )
}

export default TodoNew
