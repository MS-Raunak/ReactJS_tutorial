import React from 'react'
// Example-1
function ChildComponent(props) {
    const data = "Chhaya!"
  return (
    <>
    {/* Here data is passing from child to component while calling the function which is created in parent component */}
      <button onClick={() => props.getData(data)}>Click Here</button>
    </>
  )
}

export default ChildComponent
