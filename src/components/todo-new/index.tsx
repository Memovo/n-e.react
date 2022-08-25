import React from 'react'
import { Button, Input } from 'antd'
import '../../styles/todo-new.scss'
import { useStore } from "../../helpers/use-store"
import { onEnterPress } from "../../helpers/use-enter"

const TodoNew = () => {
    const [newTodo, setTodo] = React.useState('')

    const todoList = useStore()

    const addTodo = () => {
        todoList.addTodo(newTodo)
        setTodo('')
    }

    return (
        <div className="todo-new">
            <Input
                type="text"
                value={newTodo}
                style={{ flex: 1, marginRight: 10 }}
                onKeyDown={onEnterPress(addTodo)}
                onChange={e => setTodo(e.target.value)}
            />
            <Button style={{ width: 80 }} onClick={addTodo}>Add Todo</Button>
        </div>
    )
}

export default TodoNew
