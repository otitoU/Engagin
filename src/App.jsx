import { useState, useEffect } from 'react'
import { Header, NavBar, CardSlider, PricingCard } from './components'
import { Features, AboutCompany, Accordian, Loader } from './pages'

import './App.scss'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const text = `We offer an augmented live streaming experience that overlays 3D statistics on live games as users are viewing. Statistics such as ball speed, distance traveled, 
  and pushing and passing yards that are captured by Sideline technology through various camera angles and the FTC, are securely transmitted to our platform. This way users are able to appreciate the athleticism of the player and further grasp the integrity of the game. Users can track personalized stats and feedback catered to their interests in the sport as analyzed by AI and Machine learning models.
`
  const heading = `Augmented Livestreams`

  const text1 = `A highlight section that shows short emotional videos of players during games directed to user preferences. For example, we capture player interactions during pep talks from the coach during halftime or the moment a player gets his first down. This way, we build and foster an emotional connection between fans and the sport. Additionally, we include sideline sounds and video to capture the atmosphere around the players “on the sideline.” Users can share these moments on existing social media platforms to further increase brand visibility.
`
  const heading1 = `EmoCam`

  const accordainData = [
    {
      id: 1,
      title: 'How to pay for the watch party feature?',
      content: `Use your preferred method of payment either through PayPal, Credit or Debit card`,
    },
    {
      id: 2,
      title: 'Do I get rewarded for hosting watch parties?',
      content: `No you do not, but you can get rewarded by susbscribing and playing the trivias at half-time`,
    },
    {
      id: 3,
      title: 'How to get gift assets?',
      content: `Use your rewards and points to purchase special gift assets from your favorite team.`,
    },
    {
      id: 4,
      title: 'Why Ar?',
      content: `Allows for a new level immersion in fottball watching, so as you can feel like you are there`,
    },
  ]
  const cardsData = [
    {
      id: 1,
      type: 'free',
      title: 'Basic Plan',
      description: '',
      price: 0,
      recurrency: 0,
      mostPopular: false,
      data: [
        '0 dollar paid for first month',
        'Pay per view for access to individual games',
      ],
    },
    {
      id: 3,
      type: 'medium',
      title: 'Regular Plan',
      description: '',
      price: 14.99,
      recurrency: 14.99,
      mostPopular: true,
      data: [
        'Full Access to features',

        'Get messages from Favourite players',
        '24/7 Support',
      ],
    },
    {
      id: 2,
      type: 'Full Season',
      title: 'Full Season Plan',
      description: '',
      price: 89.99,
      recurrency: 0,
      mostPopular: false,
      data: [
        'Full Access to features',

        'Get messages from Favourite players',
        '24/7 Support',
      ],
    },
  ]

  useEffect(() => {
    setTimeout(() => setLoading(false), 2 * 1000)
  }, [])

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          <AboutCompany />
          <Header />

          <Features text={text} heading={heading} />
          <Features
            reversed="features-reversed"
            text={text1}
            heading={heading1}
            no="d"
          />
          <CardSlider />
          <h2 className="oSM">Our Subscription model</h2>
          <div className="pricingcard">
            {cardsData.map((props) => {
              return <PricingCard {...props} key={props.id} />
            })}
          </div>
          <div className="wrapper">
            <h2>FAQ</h2>
            {accordainData.map((data) => {
              return <Accordian {...data} key={data.id} />
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default App
