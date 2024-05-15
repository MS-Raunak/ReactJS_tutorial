import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    const[count, setCount] = useState(0);

    useEffect(() => {
        alert(`useEffect hook\n Count:${count}`)
        console.log("useEffect hook");
    },[count])

   

    const increment = () => {
        setCount(count + 1)
    }

  return (
    <div>
      <h2>UseEffect Hook</h2>
      <button onClick={increment}>Count: {count} </button>
    </div>
  )
}

export default UseEffectHook
