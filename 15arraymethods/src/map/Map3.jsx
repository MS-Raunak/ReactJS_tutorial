import React from 'react'

function Map3() {
    const fruits = ["Apple", "Banana", "Orange", "Mango"];
    const fruitItems = fruits.map((fruit, index) => <li key={index}>{fruit}</li>)
  return (
    <div>
         <h2>Example-3</h2>
      <ul>{fruitItems}</ul>
    </div>
  )
}

export default Map3
