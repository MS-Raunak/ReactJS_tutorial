import { useState } from "react";
import "./App.css";
import { useMemo } from "react";

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [count, setCount] = useState(0);

  // const sum = () => {
  //   console.log("Calculating..");
  //   return number1+number2;
  // }
  const sum = useMemo(()=> {
      console.log("Calculating..");
      return number1+number2;
  },[number1, number2])

  return (
    <>
    <h1>useMemo Hook</h1>
      <input
        type="number"
        value={number1}
        onChange={(event) => setNumber1(Number(event.target.value))}
      />

      <input
        type="number"
        value={number2}
        onChange={(event) => setNumber2(Number(event.target.value))}
      />

    {/* <p>Sum:{sum()}</p> */}
    <p>Sum:{sum}</p>

    <button onClick={() => setCount(count+1)}>Count++{count}</button>
    
    </>
  );
}

export default App;
