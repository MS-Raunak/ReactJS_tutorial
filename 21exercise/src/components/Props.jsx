import React from 'react'

function Props(props) {
  return (
    <div>
        <h2>{props.title}</h2>
        <button onClick={props.increment}>propscounter++{props.count}</button>
    </div>
  )
}

export default Props
