import React, { PureComponent } from 'react'

export default class ExampleWithState extends PureComponent {
    constructor(){
        super();
        this.state = { count : 0 };
    }
  render() {
    console.log("Re-render");
    return (
      <div>
        <h2>Pure Component : {this.state.count}</h2>
        {/* In this case alway re-render will get happen because count value is increasing each time */}
        <button onClick={() => this.setState({count : this.state.count+1})}>count1</button>

         {/* In this case alway re-render will get happen because count value is not  increasing*/}
         <button onClick={() => this.setState({count : this.state.count})}>count2</button>
      </div>
    )
  }
}
