import './App.css'
import ReusableButton from './reusable components/ReusableButton'
import ReusableDemo from './reusable components/ReusableDemo'
import ReusableList from './reusable components/ReusableList'

function App() {

  // Example-Demo
  const text = "Reusable Components Demo"

  // Example-1
    const handleClick = () => {
      alert("Button Clicked")
    }

    // Example-2
    const countries = ["India", "Ameriaca", "China", "Russia", "France"]
  return (
    <>
      <ReusableDemo title={text}/>
      {/* Example-1 */}
      <ReusableButton text="Click Me" onclick={handleClick}/>
      <ReusableButton text="Click Here" onclick={handleClick}/>
     

      {/* Example-2 */}
      <ReusableList countries={countries}/>

    </>
  )
}

export default App
