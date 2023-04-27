import React from 'react'
import earth from '../assets/earth.jpg'
import './About.css'
function About() {
  return (
    <div className="about">
        <div className="image">
        <img src={earth}/>
        </div>
        <div className="content">
            <h2>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae ratione a officiis id temporibus autem? Quod nemo facilis cupiditate. Ex, vel?</p>
            <h2>Our Vision</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet enim quod veritatis, nihil voluptas culpa! Neque consectetur obcaecati sapiente? Lorem ipsum dolor sit. Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        </div>
    </div>
  )
}

export default About