import React, { useState } from 'react'
import './Features.scss'

const Features = ({ reversed, text, heading, no }) => {
  const [isReadMore, setIsReadMore] = useState(true)
  const handleClick = () => {
    setIsReadMore(!isReadMore)
  }

  return (
    <div className={`features ${reversed}`} id="features">
      <h2>Features</h2>
      <div className="main">
        <div className="image">
          {no ? (
            <iframe
              width="398"
              height="365"
              src="https://www.youtube.com/embed/7FjdNKq3ARQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="ytvid"
            ></iframe>
          ) : (
            <iframe
              width="398"
              height="365"
              src="https://www.youtube.com/embed/yNnN8ZXkyis"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          )}
        </div>

        <div className="right">
          <h4>{heading}</h4>
          <p>{isReadMore ? `${text.slice(0, 204)}...` : `${text} `}</p>
          <a onClick={handleClick} className="">
            {isReadMore ? 'Read More' : ' Read Less'}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Features
