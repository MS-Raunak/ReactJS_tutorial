import React, { useState } from "react";

function Onclick() {
    const[text, setText] = useState("Hello")

    let flag = true;
    const showText = () => {
        if(flag) {
            setText("Welcome!!")
            flag = false;
        }
        else {
            setText("Hi")
            flag = true;
        }
    }

    return(
        <>
            <h2>Onclick event</h2>
            <button onClick={showText}>Click Here</button>
            <h3>{text}</h3>
        </>

    )
}

export default Onclick;