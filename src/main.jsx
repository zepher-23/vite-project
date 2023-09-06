import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from "./About.jsx"
import { BrowserRouter, Routes,Route } from 'react-router-dom'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
    
     <Routes>
      <Route  path='/' element= {<App />} />   //localhost:5173/
      <Route   path='/about' element={<About />}/> //localhost:5173/about
    </Routes>
    
    </BrowserRouter>

  </React.StrictMode>,
)


// <App />