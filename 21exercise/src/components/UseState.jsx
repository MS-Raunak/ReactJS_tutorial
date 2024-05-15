import React, { useState } from "react"

export default function UseState() {
    const[count, setCount] = useState(0);
    const[countminus, setCountMinus] = useState(20)

    const handleCounter = () => {
        let c;
        if(count<20) {
            c = count+1;
        }
        setCount(c);
        console.log(c);
    }

    return(
        <div>
            <h3>Lets Learn State in React JS</h3>
            <button onClick={handleCounter}>Count++:{count} </button>
            <button onClick={() => setCountMinus(countminus-1)}>Count--:{countminus}</button>
        </div>
    )
}