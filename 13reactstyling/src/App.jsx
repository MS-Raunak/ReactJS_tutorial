import './App.css'
import './externalStyle.css'

function App() {

  const jsStyle =  {
    color: "white",
    backgroundColor: "red"
  }
 
  return (
    <>
     
      {/* Inline CSS */}
      <h2 style={ {color: "red", backgroundColor: "blue"}}>Inline css</h2>
      {/* External CSS */}
      <h2 className='external'>External css</h2>
      {/* Internal CSS */}
      <h2 style={jsStyle}>Css in JS</h2>
    </>
  )
}

export default App
