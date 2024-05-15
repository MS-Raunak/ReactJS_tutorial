import React from 'react'

function Conditional2() {

    // const items = ["apple", "orange", "banana"];
    const items = [];

  return (
    <div>
        {
            items.length > 0 ?
            ( <ul>{ items.map((item, index) => ( <li key={index}>{item}</li> )) }</ul>)
            : <p>No items to display</p>
        }
    </div>
  )
}

export default Conditional2
