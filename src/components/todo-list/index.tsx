import React from 'react'
import { useObserver } from 'mobx-react'
import '../../styles/todo-list.scss'
import { useStore } from "../../helpers/use-store"
import TodoItemClass  from "../../stores/todo-item"
import TodoItem from '../todo-item'

const TodoList: React.FC = () => {

  const todoList = useStore()

  const todoItem = (list: Array<TodoItemClass>) => {
    return (
      list.length
        ? list.map((item: TodoItemClass, index: number) => <div key={index}><TodoItem todo={item} /></div>)
        : null
    )
  }

  return useObserver(() => (
    <div className='todo-list'>
      <div className='todo-temp'>
        <div className='title'>
          Open Todos
        </div>
        {todoItem(todoList.openTodos || [])}
      </div>
      <div className='todo-temp'>
        <div className='title'>
          Finished Todos
        </div>
        {todoItem(todoList.finishedTodos || [])}
      </div>
    </div>
  ))
}

export default TodoList
