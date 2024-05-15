import React from 'react'

function MyComponent2(props) {
  return (
    <>
      <button onClick={props.increment}>Increment : {props.count}</button>
    </>
  )
}

export default MyComponent2
