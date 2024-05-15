import { useState } from 'react';
import './App.css'
import ChildComponent from './ChildComponent'
import ChildComponent2 from './ChildComponent2';

function App() {

  // Example-1
  // This function receving data which is coming from child component
  const handleAlert = (data) => {
    console.log("Hello", data);
  }

// Example-2
  const [data, setData] = useState("");
  const handleChange = (event)  => {
   setData(event.target.value)
    console.log(event.target.value);
  }

  return (
    <>
      <h1>Lifting State UP</h1>
      {/* Example-1 */}
      <ChildComponent getData={handleAlert}/>

      {/* Example-2 */}
      <ChildComponent2 inputVal={data} inputChange = {handleChange}/>
    </>
  )
}

export default App
