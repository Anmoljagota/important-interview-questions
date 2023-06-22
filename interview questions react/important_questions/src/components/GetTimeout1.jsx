import React from 'react'
import useTimeout from '../Hooks/useTimeout'

const GetTimeout1 = () => {
    const getData=useTimeout(5000)
  return (
    <div>
      {getData && <h1>showloader</h1>}
    </div>
  )
}

export default GetTimeout1
