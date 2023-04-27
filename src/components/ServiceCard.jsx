import React from 'react'
import './ServiceCard.css'
import chips from '../assets/chips.jpg'
function ServiceCard() {
  return (
    <div className='service'>
        <div className="image">
        <img src={chips}/>
        </div>
        <div className="content">
          <h2>Our Services</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora hic, aperiam vel fugiat sed accusamus ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ut earum repellendus maxime facere quas laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, delectus nesciunt. </p>
            <a href='#'>Read more</a>
        </div>
    </div>
  )
}

export default ServiceCard