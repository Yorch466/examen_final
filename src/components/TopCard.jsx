import React from 'react'
import "./TopCard.css"

export const TopCard = () => {
  return (
    <div className='top-card-container'>
        <div className="image-container">
            <img src="../public/Images/pina.png" alt="no furulo we" className="pina" />
        </div>
        <div className="button-container">
            <button className='but-1'>
                <img src="../public/Images/heart.png" alt="no furulo we" />
            </button>
        </div>
    </div>
  )
}
