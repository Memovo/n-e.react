import React from 'react'

import { Button, Checkbox } from 'antd'
import { spaces } from '../../utils/util'

const App: React.FC<Record<string, itemType>> = props => {
  const { item } = props
  return (
    <div className='item'>
      <span>{item.text}</span>
      <Checkbox />{spaces(3)}
      <Button>Edit</Button>{spaces(3)}
      <Button>Delete</Button>
    </div>
  )
}

export default App
