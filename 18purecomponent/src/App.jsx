import './App.css'
import React from 'react';
import ExampleWithState from './ExampleWithState';
import ExampleWithProps from './ExampleWithProps';


class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {count : 0}
  };
  render(){
    // ExampleWithProps
    console.log("Parent Re-render");
    const handleCount = () => {
      this.setState({count : this.state.count})
    }
    return(
        <>
          {/* <ExampleWithState/> */}
          <ExampleWithProps countVal = {this.state.count} setcount = {handleCount}/>
        </>
    )
  }
}

export default App;