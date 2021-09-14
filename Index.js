import React, { useReducer } from 'react'
import Editor from './Editor'
import Card from './Card'

const initialState = [
  { mode: 'edit', name: 'trivendra' },
  { mode: 'view', name: 'tiwari' },
]
function reducer(list, action) {
  switch (action.type) {
    case 'add':
      const newList1 = [...list]
      newList1.push({
        ...action.payload,
      })
      return newList1

    case 'edit':
      const newList2 = list.map((item, i) => {
        if (action.index == i) {
          return {
            ...action.payload,
            mode: 'view',
          }
        }
        return item
      })
      return newList2

    case 'change2Edit':
      const newList3 = list.map((item, i) => {
        if (action.index == i) {
          return {
            ...item,
            mode: 'edit',
          }
        }
        return item
      })
      return newList3
    case 'delete1':
      const newList4 = list.filter((item, i) => action.payload !== i)
      return newList4
  }
}

export default function Index() {
  const [list, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <div>
        <h1>Add a new user</h1>
        <Editor type="add" dispatch={dispatch} />
      </div>

      <div>
        {list.map((item, i) => {
          return (
            <div key={i}>
              {item.mode == 'edit' ? (
                <Editor type="edit" index={i} name={item.name} dispatch={dispatch} />
              ) : (
                <Card item={item} index={i} dispatch={dispatch} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
