import React, { useState } from 'react'
import './App.css'

class App extends React.Component {
  constructor(){
    super();
    console.log("Constructor invoked");
  }

  render() {
    console.log("render method invoked");
    return(
      <>
        <h2>Lifecycle method in React</h2>
      </>
    )
  }
}

export default App
