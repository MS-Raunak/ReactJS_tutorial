import React from 'react'

//Map function with array
function Map1() {
    const names = ["Alice", "Bob", "Charlie", "Chhaya"];
  return (
    <div>
        <h2>Example-1</h2>
      <ul>
        {
            names.map((name, index) => (
                <li key={index}>{name}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default Map1
