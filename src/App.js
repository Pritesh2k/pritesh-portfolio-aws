// App.js
import React, { useRef, useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import About from './Pages/About';

function App() {
  const mainContainerRef = useRef(null);
  const [navOpen, setNavOpen] = useState(false);
  const [iconRotation, setIconRotation] = useState(0);

  const handleToggleNav = () => {
    setNavOpen(!navOpen);
    setIconRotation(prevRotation => prevRotation + 180);
  };

  const handleScroll = (event) => {
    const container = mainContainerRef.current;
    const scrollBox = document.getElementById('scroll-box');
    const isMouseOverScrollBox = scrollBox && scrollBox.contains(event.target);
  
    if (isMouseOverScrollBox) {
      // Enable vertical scrolling
      container.scrollTop += event.deltaY;
    } else {
      // Enable horizontal scrolling
      const delta = Math.max(-1, Math.min(1, (event.nativeEvent.wheelDelta || -event.nativeEvent.detail)));
      container.scrollLeft -= delta * 1000;
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`primary-container-wrapper ${navOpen ? 'nav-open' : ''}`} onWheel={handleScroll}>
      <div className={`nav-container ${navOpen ? 'open' : ''}`}>
        <a className='nav-state-toggle' onClick={handleToggleNav}>
          <KeyboardArrowRightIcon fontSize='large' style={{ transform: `rotate(${iconRotation}deg)`, color:'red'}} />
        </a>
        <div className='nav-title'>Menu</div>
        <ul className='nav-items'>
          <li className='item' onClick={() => scrollToSection('home')}>Home</li>
          <li className='item' onClick={() => scrollToSection('about')}>About</li>
          <li className='item' onClick={() => scrollToSection('skills')}>Skills</li>
          <li className='item' onClick={() => scrollToSection('projects')}>Projects</li>
          <li className='item' onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </div>

      <div className='main-container' ref={mainContainerRef}>
        <div className={`page ${navOpen ? 'darken' : ''}`} id="home">
          <Home />
        </div>
        <div className={`page ${navOpen ? 'darken' : ''}`} id="about">
          <About />
        </div>
        <div className={`page ${navOpen ? 'darken' : ''}`} id="skills">
          <Skills />
        </div>
        <div className={`page ${navOpen ? 'darken' : ''}`} id="projects">
          <Projects />
        </div>
        <div className={`page ${navOpen ? 'darken' : ''}`} id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
