import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import Main from './main'
import { TodoList } from './stores/todo-list'
import { StoreProvider } from "./helpers/store-provider"

const todoList = new TodoList([
  'Should Starting Writing in React',
  'Should Learn MobX',
  'Should Watch Once Piece :)'
])

//@ts-ignore - for debugging
window.todoList = todoList

// React.StrictMode最佳实践: https://reactjs.org/docs/strict-mode.html
createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider value={todoList}>
    <Main />
  </StoreProvider>
)
