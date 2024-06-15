import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CustomRouter from './CustomRouter/CustomRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 
    <CustomRouter/>
  
  </BrowserRouter>
)
