import React from 'react'

const TodoElements = ({setData,todo}) => {
    // console.log(todo)
  return (
    <div>
      <button onClick={()=>setData(todo+1)}>click</button>
    </div>
  )
}

export default TodoElements
