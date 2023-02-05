import React from 'react'
import Navbar from './component/navbar/Navbar'
import './App.scss';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Education from './pages/Education/Education';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Contacts from './pages/Contacts/Contacts';
const App = () => {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Education />
    <Skills />
    <Projects />
    <Contacts />
    
    </>
    
  )
}

export default App