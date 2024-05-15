import React from 'react'

// Example-2
function ChildComponent2({inputVal, inputChange}) {
    let text="helol";
  return (
    <>
      <input type="text" value={inputVal}  onChange={inputChange}/>
    </>
  )
}

export default ChildComponent2
