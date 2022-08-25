import React from 'react'

import { Button, Checkbox } from 'antd'
import { useStore } from "../../helpers/use-store"
import { spaces } from '../../utils/util'
import TodoItem  from "../../stores/todo-item"

const App: React.FC<Record<string, TodoItem>> = props => {
  const { todo } = props

  const { removeTodo } = useStore()

  return (
    <div className='item'>
      <span>{todo.text}</span>
      <Checkbox onChange={todo.toggleIsDone} defaultChecked={todo.isDone} />
      {spaces(3)}
      <Button>Edit</Button>
      {spaces(3)}
      <Button onClick={() => removeTodo(todo)}>Delete</Button>
    </div>
  )
}

export default App
