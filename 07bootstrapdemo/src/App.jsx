import { useState } from 'react';
import About from './Components/About';
import Navbar from './Components/Navbar'
import Textform from './Components/Textform';
import Alert from './Components/Alert';



function App() {
  const[mode, setMode] = useState("light")
  const[txtColor, settxtColor] = useState('dark')
  const[bgColor, setbgColor] = useState('light')
  const[alert, setAlert] = useState(null)

  const showAlert = (message, type) => {  // passing object
    setAlert({
      msg: message,
      type : type
    })

    setTimeout(() => {
      showAlert(null)
    }, 3000)
  }
  
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#2c3e50'
      settxtColor('white')
      setbgColor('dark')
      
      showAlert("dark mode has been enabled", "success")
      document.title="Textutils-Darkmode"  //changing title dynamically

      //Changing title every particular given times
      // setInterval(() => {
      //   document.title = "Amazing textutils"
      // },2000)
      // setInterval(() => {
      //   document.title = "Download textutils"
      // },1500)
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      settxtColor('dark')
      setbgColor('light')
      showAlert("light mode has been enabled", "success")
      document.title="Textutils-Lightmode"   //changing title dynamically
    }
  }
  return (
    <>
    <Navbar title={"TextUtils"} mode ={mode} toggleMode = {toggleMode} txtColor={txtColor} about="AboutTextUtils"/>
    <Alert alert={alert}/>
   <div className="container">
   <Textform heading="Enter the text to analyze below" showAlert = {showAlert}  bgColor={bgColor} txtColor={txtColor}/>
   {/* <About/> */}

   </div>
    </>
    
  )
}

export default App;
