import React from "react";

export default function Conditional1() {
    const isLoggedin = true;
    return(
        <>
            { isLoggedin ? <h1>Welcome user</h1> : <h1>Welcome Guest</h1> }
        </>
    )
}

/**
 * If isLoggedin is true then show "Welcome User" else show "Welcome Guest"
 */
