import React,{memo} from 'react'

function ChildComponet() {
    console.log("Child Re-rendered");
  return (
    <div>
      <h2>Child Component</h2> 
    </div>
  )
}

export default memo(ChildComponet)
