import React from 'react'
import './Card.scss'

const Card = ({ img, title, para }) => {
  return (
    <div className="card">
      <img src={img} className="card_img" />
      <div className="card_info">
        <h4 className="card_title">{title}</h4>
        <p className="bottom_card">{para}</p>
      </div>
    </div>
  )
}

export default Card
