import { useState } from 'react'
import "./css/App.css";

function App() {
  let [color, setColor] = useState("olive")


  // let setColors = function(){
  //     color="red"
  //     setColor(color)
  //     console.log(color);
  // }

  return (
   <>
      <div className='main-box' style={{backgroundColor : color}}>
          <div className="btn-box">
            <button className='btn btnRed' onClick={() => setColor("red")}>Red</button>
            <button className='btn btnBlack' onClick={() => setColor("black")}>Black</button>
            <button className='btn btnBlue' onClick={() => setColor('blue')}>Blue</button>
            <button className='btn btnYellow' onClick={() => setColor('yellow')}>Yellow</button>
          </div>
      </div>
   </>
  )
}

export default App
