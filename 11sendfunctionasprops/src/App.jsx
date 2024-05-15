import  { useState } from 'react'
import './App.css'
import MyComponent from './MyComponent'
import MyComponent2 from './MyComponent2'

function App() {
    //Example-1
    const clickMe = () => {
      console.log("Btn Clicked");
    }

    // Example2
  let [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count+1);
  }

  return (
    <>
      <h2>Function as a props</h2>
      <MyComponent funprops = {clickMe}/>
      <MyComponent2 
      count = {count} 
      increment = {incrementCount} />
    </>
  )
}

export default App
