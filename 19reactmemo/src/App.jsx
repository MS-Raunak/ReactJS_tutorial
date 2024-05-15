import { useState } from 'react'
import './App.css'
import ChildComponet from './ChildComponet';

function App() {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount(count+1);
    console.log("Parent Component Re-rendered");
  }

  return (
    <>
      <h2>React Memo : Avoid unnecessary re-rendering</h2>
      {/* Child will not be re-render bkg always same static output is displaying */}
      <ChildComponet />
      <button onClick={handleCount}>Count+{count}</button>
    </>
  )
}

export default App
