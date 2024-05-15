import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import MyClassComponent from './Component/ClassBasedComponent/MyClassComponent.jsx'
import MyFunComponent from './Component/FunctionalComponent/MyFunComponent.jsx'

import Chai from './Component/FunctionalComponent/Chai.jsx'
import Ms from './Component/FunctionalComponent/Ms.jsx'
import Chhaya from './Component/FunctionalComponent/Chhaya.jsx'
import MyComponent from './Component/ClassBasedComponent/MyClassComponent.jsx'

import Navbar from './Component/ClassBasedComponent/Navbar.jsx'
import Menu from './Component/ClassBasedComponent/Menu.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <MyClassComponent/>
    <MyFunComponent/>
    {/* <Navbar/> */}
    {/* <Menu/> */}
    {/* <Chai/> */}
    {/* <Ms/> */}
    {/* <Chhaya></Chhaya> */}

  </React.StrictMode>,
)
