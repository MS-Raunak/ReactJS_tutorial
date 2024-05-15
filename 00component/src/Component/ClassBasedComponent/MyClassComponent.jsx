import React, { Component } from "react";

class MyClassComponent extends React.Component {  // we can also write only Component
    constructor() {
        super();
    }

    render(){
        return(
            <h1>This is class based component</h1>
        )
    }
}

export default MyClassComponent;