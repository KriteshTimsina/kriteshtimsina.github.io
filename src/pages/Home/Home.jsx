import React from 'react'
import './Home.scss';
import {FiYoutube} from "react-icons/fi";
import {TbBrandSpotify} from "react-icons/tb";
import {FiFacebook} from "react-icons/fi";
import Button from '../../component/Button/Button';
import { Greetings } from '../../component/Greet/Greetings';
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
// import '../../App.scss'

const Home = ({theme}) => {

  return (
    <div  className="Home-container home collapse">
        <motion.div
        animate={{
          scale: [0.5,0.6, 0.7, 0.8, 0.9,1],
          opacity:[0,0.3,0.5,0.7,1],       
        }}
        className='img-container'  >
            <img alt='Kritesh Timsina'  src='hero.JPG'  />
        </motion.div>
        <motion.div
        animate={{
          scale: [0.5,0.6,0.7, 0.8, 0.9,1],
          opacity:[0,0.3,0.5,0.7,1],       
        }}
        className='details'>
           
            <Greetings />
            <h2 className='name'> I'm Kritesh Timsina</h2>
             <div className='typewriter'>
            <Typewriter 
              options={
                {
                  strings : ["Musician(wannabe)","Web Developer"],
                  autoStart:true,
                  loop:true,     
                }
              }
            />
           </div>
            <Button value="Listen to my music" />
            
            <div className='socials'>
                <p>Find me on: </p>
                <div className='social-links'>
                   <a rel="noreferrer"  target="_blank" href='https://www.facebook.com/ktiteshtimsina55'>  <FiFacebook /></a>
                   <a rel="noreferrer"  target="_blank" href='https://www.youtube.com/channel/UCMfPCKe21EG838bToUekPfQ'>  <FiYoutube /></a>
                   <a rel="noreferrer"  target="_blank" href='#' >  <TbBrandSpotify /></a>
                </div>
            </div>
        </motion.div>

    </div>
  )
}

export default Home