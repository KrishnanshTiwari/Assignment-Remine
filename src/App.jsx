import React from 'react'
import Home from './views/Home'
import Navbar from './components/Navbar'
import About from './views/About'
import Service from './views/Service'
import Contact from './views/Contact'
import './App.css'
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Contact/>
    </div>
  )
}

export default App