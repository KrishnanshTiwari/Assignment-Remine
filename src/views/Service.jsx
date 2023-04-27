import React from 'react'
import ServiceCard from '../components/ServiceCard'
import './Service.css'
function Service() {
  return (
    <div className='service-container'>
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
    </div>
  )
}

export default Service