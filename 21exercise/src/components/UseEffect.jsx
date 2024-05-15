import React, { useEffect, useState } from 'react'

function UseEffect({title}) {

    const[text, setText] = useState('Click here to see the effect')

    let flag=true;
    const handleText = () => {
        if(flag){
            setText("Dekha kuch")
            flag=false;
        }
        else{
            setText('Click here to see the effect')
            flag=true;
        }
    }
    useEffect(()=>{
        alert("Hahahahhahahhah")
    },[text])
  return (

    <div>
        <h2>{title}</h2>
      <button onClick={handleText}>{text}</button>
    </div>
  )
}

export default UseEffect
