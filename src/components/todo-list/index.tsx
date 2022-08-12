import React from 'react'
import '../../styles/todo-list.scss'
import { xhrGetTodo } from '../../mock/todo'
import { Button, Checkbox } from 'antd'
import { spaces } from '../../utils/util'

type itemType = Record<string, any>

const TodoList: React.FC = () => {

  const [list, setList] = React.useState<Array<itemType>>([])

  React.useEffect(() => {
    xhrGetTodo().then(res => {
      const { status, list } = res
      setList(status === 200 ? list : [])
    })
  }, [])

  const listFun = React.useMemo(() => {
    return list.length && list.map((item: itemType, index: number) => {
      return <div className='item' key={index}>
        <span>{item.text}</span>
        <Checkbox />{spaces(3)}
        <Button>Edit</Button>{spaces(3)}
        <Button>Delete</Button>
      </div>
    })
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
