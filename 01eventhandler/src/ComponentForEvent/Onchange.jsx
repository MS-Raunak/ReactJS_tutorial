import React, { useState } from "react";

function Onchange() {
    let[txt, setText] = useState("")

    const showText = (event) => {
        setText(event.target.value)
        console.log(txt);
    }

    return(
        <>
            <h1>Onchange Event</h1>
            <input type="text"  onChange={showText} />
        </>
    )
    
}

export default Onchange;