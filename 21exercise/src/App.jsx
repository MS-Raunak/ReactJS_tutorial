import { useState } from 'react';
import './App.css'
import ChangeBackground from './components/ChangeBackground';
import Demo from './components/Demo'
import USeState from "./components/UseState"
import Props from './components/Props';
import UseEffect from './components/UseEffect';

function App() {

  const[count, setCount] = useState(0);
  const handleCounter = () => {
    setCount(count+1)
    console.log(count);
  }
  
  return (
    <>
     <Demo/>
     <USeState/>
     <ChangeBackground/>
     <Props title='This is Props' count={count} increment={handleCounter}/>
     <UseEffect title="This is UseEffect Hook" />
    </>
  )
}

export default App;
