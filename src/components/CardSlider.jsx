import React from 'react'
import './CardSlider.scss'
import Card from './Card'
const cardcontents = [
  {
    id: 0,
    // img: '../src/assets/companyLogo.svg',
    title: 'AR Analytic',
    para: 'We provide an augmented reality system that enables users to view and interact with post-game statistics captured using various sideline technologies. For example, by overlaying player data captured by Zebra Technologies on top of video captured from the “all-22” and endzone cameras, we are able to virtually map unique player stats unavailable to most sports streaming platforms. ',
  },
  {
    id: 0,
    // img: '../src/assets/companyLogo.svg',
    title: 'Watch Party',
    para: 'We provide fans with the ability to watch the game with a group of friends or family. Influencers and celebrities can also host watch parties for users to join. Watching a football game with a group fosters community and drives engagement',
  },
  {
    id: 0,
    // img: '../src/assets/companyLogo.svg',
    title: 'Integrity & Non-Obstruction',
    para: 'In an effort to ensure the integrity of the football game, we implement secure data sharing protocols and content screening to ensure no privileged or private information is disseminated publicly at the detriment of the players, the coaches, and the team.',
  },
  {
    id: 0,
    // img: '../src/assets/companyLogo.svg',
    title: 'Trivia and Point System',
    para: 'We display various trivia questions during game breaks. Users can test their football knowledge and earn loyalty points for getting questions answered right. Points can be redeemed for premium app content.',
  },
]

const CardSlider = () => {
  return (
    <section className="sof">
      <h2>Some other Features include</h2>
      <div className="card_slider">
        {cardcontents.map((content) => (
          <Card key={content.id} {...content} />
        ))}
      </div>
    </section>
  )
}

export default CardSlider
