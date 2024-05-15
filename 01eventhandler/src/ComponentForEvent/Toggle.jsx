import React, { useState } from "react";
import '../App.css'

function  Toggle() {

    let[toggle, setToggle] = useState(true)
    const[content, setContent] = useState("hide")



    const handleToggle = () => {
        if(content=="show") setContent("hide")
        else setContent("show")

        if(toggle==true) {
            toggle = false
            setToggle(toggle)
        }
        else{
            toggle=true
            setToggle(toggle)
        }
    }

    return(
        <>

        {toggle ? <div className="toggle">Content</div> : null}
         <button className="toggleBtn" onClick={handleToggle}>{content}</button>
        </>
    )
    
}

export default Toggle;