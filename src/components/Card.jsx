import React from 'react'
import "./Card.css"
export const Card = () => {
  return (
    <div className='card-container'>
        <div className="text-container-1">
            <span className='spa1'>Standard Cactus</span>
            <span className='spa2'>$20.0</span>
        </div>
        <div className="text-container-2">
            Succulent
        </div>
        <div className="stars-container">
            <img src="../public/Images/star.png" alt="no furulo we"  />
            <img src="../public/Images/star.png" alt="no furulo we"  />
            <img src="../public/Images/star.png" alt="no furulo we"  />
            <img src="../public/Images/star.png" alt="no furulo we"  />
            <img src="../public/Images/star.png" alt="no furulo we"  />
            <span>2 reviews</span>
        </div>
        <div className="button-container-card">
            <span className='minus'>-</span>
            <span className='number'>1</span>
            <span className='plus'>+</span>
        </div>
    </div>
  )
}
