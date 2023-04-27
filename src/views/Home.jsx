import React from 'react'
import Ewaste from '../assets/Ewaste.jpg'
import './Home.css'
function Home() {
  return (
       <div className="Home">
       <div className="textbox">
        <h1>We are making the world a better place to live</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio porro enim quam dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <a href="#" className="myButton">Join Us</a>
      </div>
      <div className="imagebox">
        <img src={Ewaste}/>
      </div>
    </div>
  
  )
}

export default Home