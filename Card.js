import React from 'react'
export default function Card(props) {
  return (
    <div>
      {props.item.name}
      <button
        onClick={() => {
          props.dispatch({ type: 'change2Edit', index: props.index })
        }}
      >
        edit
      </button>
      <button
        onClick={() => {
          props.dispatch({ type: 'delete1', payload: props.index })
        }}
      >
        delete
      </button>
    </div>
  )
}
