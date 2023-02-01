import React from 'react'
import Button from '../../component/Button/Button';
import './about.scss'
const About = () => {
  return (
    <div className='About-container about collapse'>

      <div className="about-image">
        <img src="about.jpg" width="500px" />
      </div>
      <div className="about-description">
        <h1 className="title">ABOUT ME </h1>
        <p className="name">KRITESH TIMSINA - WEB DEVELOPER</p>
        <p className="description">❝A highly motivated and eager student of B.Sc CSIT 7th semester with a passion for learning new technologies. With hands-on experience in HTML, CSS, JS and React Js. Seeking opportunities to expand skillset and work on challenging projects.❞</p>
        <a className="cta-link" target="__blank" href="cv.pdf"  >
        <Button  className="cta" value="Download CV" icon="cvicon.gif"  />
        </a>
      </div>
    </div>
  )
}

export default About