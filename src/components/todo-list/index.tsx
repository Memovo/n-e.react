import React from 'react'
import '../../styles/todo-list.scss'
import { xhrGetTodo } from '../../mock/todo'
import { useStore } from "../../helpers/use-store"
import TodoItem from '../todo-item'

const TodoList: React.FC = () => {

  const [list, setList] = React.useState<Array<itemType>>(useStore().openTodos)

  // React.useEffect(() => {
  //   xhrGetTodo().then(res => {
  //     const { status, list } = res
  //     setList(status === 200 ? list : [])
  //   })
  // }, [])

  const listFun = React.useMemo(() => {
    return list.length && list.map((item: itemType, index: number) => <div key={index}><TodoItem item={item} /></div>)
  }, [list])

  return (
    <div className='todo-list'>
      <div className='todo-temp'>
        <div className='title'>
          Open Todos
        </div>
        {listFun}
      </div>
      <div className='todo-temp'>
        <div className='title'>
          Finished Todos
        </div>
        {listFun}
      </div>
    </div>
  )
}

export default TodoList
