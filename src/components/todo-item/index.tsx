import React from 'react'

import { Button, Checkbox, Input, Modal } from 'antd'
import { useStore } from "../../helpers/use-store"
import { spaces } from '../../utils/util'
import TodoItem from "../../stores/todo-item"
import { IDis, IType } from '../../utils/const'

type IModal = {
  title: string
  visible: boolean
  disabled?: boolean
}

const App: React.FC<Record<string, TodoItem>> = props => {
  const { todo } = props
  const { removeTodo, editTodo } = useStore()

  const [modal, setModal] = React.useState<IModal>({
    title: '',
    visible: false,
    disabled: false
  })
  const [inputValue, setInputValue] = React.useState<string>(todo.text || '')

  const onClick = (type: 'edit'|'check') => {
    setModal({
      disabled: IDis[type],
      title: IType[type],
      visible: !0
    })
  }

  const onClose = () => setModal({ title: '', visible: false })

  const sub = () => {
    editTodo(todo, inputValue)
    onClose()
  }

  return (
    <div className='item'>
      <span>{todo.text}</span>
      <Checkbox onChange={todo.toggleIsDone} checked={todo.isDone} defaultChecked={todo.isDone} />
      {!todo.isDone && spaces(3)}
      {!todo.isDone && <Button onClick={() => onClick('edit')}>Edit</Button>}
      {spaces(3)}
      <Button onClick={() => onClick('check')}>Check</Button>
      {spaces(3)}
      <Button onClick={() => removeTodo(todo)}>Delete</Button>
      <Modal 
        {...modal}
        onCancel={onClose}
        footer={!modal.disabled && [
          <Button key="back" onClick={onClose}>
            取消
          </Button>,
          <Button key="submit" type="primary" onClick={sub}>
            提交
          </Button>,
        ]}
      >
        <Input value={inputValue} disabled={modal.disabled} onChange={e => setInputValue(e.target.value)} />
      </Modal>
    </div>
  )
}

export default App
