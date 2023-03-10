import React from 'react'
import './AboutCompany.scss'

const AboutCompany = () => {
  return (
    <div className="about_company">
      <h1>EnGagin INC.</h1>
      <p>
        <span> Engagin Inc.</span> is a private sports streaming company located
        in Dallas, Texas. Our company is an LLC that aims to address the
        ever-changing nature of how fans engage with sports. Our{' '}
        <span>mission</span> is to bring sports fans closer to the sports they
        love and provide new systems that attract new supporters and increase
        engagement. According to a study conducted by the Morning Consult
        Holdings group, it was found that approximately 68% of{' '}
        <span> Gen Zers</span> receive sports content through short-form and
        engaging social media platforms such as Youtube, TikTok, and Instagram.
      </p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12674.838187442634!2d-96.7562220376514!3d32.760634751482336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1678434839343!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default AboutCompany
