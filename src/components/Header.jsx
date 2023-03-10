import React from 'react'
import './Header.scss'
import Button from './Button'

const Header = () => {
  return (
    <header>
      <h1>FANXCEL: A Live Streaming Platform</h1>
      {/* <img></img> */}
      <div className="image" id="product">
        <iframe
          width="698"
          height="420"
          src="https://www.youtube.com/embed/gs8A2nHpGEM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <p className="text-description">
        <span>Fanxcel</span> is a mobile application geared toward elevating the
        spectating experience created by Engagin Inc. <span>Fanxcel</span>{' '}
        offers a variety of functions but the most groundbreaking of attributes
        is the in-game AR live streaming that shows stats like: ball speed,
        pushing and passing yards, player speed and more all in real time while
        the game is at play.
      </p>
      <a>Get Started</a>
      {/* <Button  content="Get Started"/> */}
    </header>
  )
}

export default Header
