import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


//react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h2>React Bootstrap</h2>
    <App />
  </React.StrictMode>,
)
