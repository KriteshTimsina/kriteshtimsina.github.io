import React from 'react'
import './Home.scss';
import { FiYoutube } from "react-icons/fi";
import { GoMarkGithub } from "react-icons/go";
import { CiLinkedin } from "react-icons/ci";
import { BsArrowDown } from "react-icons/bs";
import Button from '../../component/Button/Button';
import { Greetings } from '../../component/Greet/Greetings';
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useNavigate } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';

const Home = ({ theme }) => {


  return (
    <div className="Home-container home collapse">
      <motion.div
        animate={{
          scale: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
          opacity: [0, 0.3, 0.5, 0.7, 1],
        }}
        className='img-container'  >
        <img alt='Kritesh Timsina' src='https://kriteshtimsina.github.io/Hero.jpg' />
      </motion.div>
      <motion.div
        animate={{
          scale: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
          opacity: [0, 0.3, 0.5, 0.7, 1],
        }}
        className='details'>

        <Greetings />
        <h2 className='name'> I'm Kritesh Timsina </h2>
        <div className='typewriter'>
          <Typewriter
            options={
              {
                strings: ["Musician(wannabe)", "Web Developer"],
                autoStart: true,
                loop: true,
              }
            }
          />
        </div>
        <a
          target="_top"
          className='cta-getintouch'
          href="mailto:kriteshtimsina55@gmail.com?&subject=FPW" >
          <Button value="Say Hi!" icon="emailme.gif" />
        </a>
        <div className='socials'>
          <p>Find me on: </p>
          <div className='social-links'>
            <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/kritesh-timsina-316355250/'>  <CiLinkedin /></a>
            <a rel="noreferrer" target="_blank" href='https://github.com/KriteshTimsina/' >  <GoMarkGithub /></a>
            <a rel="noreferrer" target="_blank" href='https://www.youtube.com/channel/UCMfPCKe21EG838bToUekPfQ'>  <FiYoutube /></a>
          </div>
        </div>
      </motion.div>

      <Link to="about" spy={true} smooth={true}  className='next-page'>
        <BsArrowDown />
      </Link>
    </div>
  )
}

export default Home