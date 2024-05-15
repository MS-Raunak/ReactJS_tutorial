import React, { useEffect, useState } from "react";

function Navbar(){
    let num = 0;
    const [count, setCount] = useState(num)

    useEffect(() => {
        alert(`Hila dala na: ${count}`)
    }, [count])



    return(
        <>
        <h2>I am back {count}</h2>
        <button onClick={() =>  setCount(count+1) }>Click Me</button>

        </>
    )
}

 export default Navbar;