import react, { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'input':
      return action.payload
  }
}

export default function Editor(props) {
  //const [state, setState] = useState({ name: props.name == undefined ? '' : props.name })
  const [state, dispatch] = useReducer(reducer, { name: props.name == undefined ? '' : props.name })

  const _fn1 = {
    save: () => {
      if (props.type == 'edit') {
        props.dispatch({ type: 'edit', index: props.index, payload: state })
      } else {
        props.dispatch({ type: 'add', payload: state })
      }
    },
  }
  return (
    <div>
      {props.type}
      <input
        value={state.name}
        onChange={(e) => {
          dispatch({ type: 'input', payload: { ...state, name: e.target.value } })
        }}
      />
      <button onClick={_fn1.save}>save</button>
    </div>
  )
}
