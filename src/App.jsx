import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HeaderCliente } from './components/HeaderClient'
import { Footer } from './components/Footer'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <HeaderCliente/>
        <Footer/>
      </Router>
    </>
  )
}

export default App
