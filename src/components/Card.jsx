import React from 'react'
import './Card.scss'

const Card = ({ classname, name, title, para }) => {
  return (
    <div className="card">
      <span className={`${classname}   card_logo`}>{name}</span>

      {/* <span class="material-symbols-outlined">web</span> */}
      <div className="card_info">
        <h4 className="card_title">{title}</h4>
        <p className="bottom_card">{para}</p>
      </div>
    </div>
  )
}

export default Card
