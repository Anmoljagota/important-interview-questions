import React from 'react'
import useTimeout from '../Hooks/useTimeout'

const Gettimeout = () => {
    const getData=useTimeout(3000)
  return (
    <div>
      {getData && <h1>showloader</h1>}
    </div>
  )
}

export default Gettimeout
