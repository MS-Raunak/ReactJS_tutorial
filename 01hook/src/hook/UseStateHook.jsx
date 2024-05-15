import React, { useState } from 'react'

function UseStateHook() {

    let val = 0;

  let [count, setCount] = useState(val);


  let increase = function(){
    
    if(count<20) setCount(count+1);
     else return;
     
     //console.log(count+1);
  }

  let decrease = () => {
    if(count > 0 ) setCount(count-1);
    else return;
    //console.log(count-1);
    
  }

  return (
    <div>
       <h2>COUNT = {count}</h2>
      <button onClick={increase}>Increment</button> <br></br>
      <button onClick={decrease}>Decrement</button>
    </div>
  )
}

export default UseStateHook
