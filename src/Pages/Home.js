import React, { useState, useEffect } from 'react';
import '../CSS/home.css'

import profilePic from '../Assets/Profile-pic.jpg'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

function Home() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [aboutTextVisible, setAboutTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAboutOpen(false);
      setInitialLoad(false);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  const toggleAbout = () => {
    setAboutOpen(!aboutOpen);
    setAboutTextVisible(!aboutTextVisible);
  };

  return (
    <div className='home-container'>
      <div className='home-subheader'>
        <div className='link-container'>
          <div className='link-title'>Links</div>
          <div className='line' />
          <div className='clickable-links'>
            <div className='links-grid'>
              <GitHubIcon />
              <LinkedInIcon />
            </div>
          </div>
        </div>
      </div>
      <div className='home-header'>
        <div className='name-title'>Portfolio</div>
        <div className='picture-container'>
          <div id='aboutTXT' className={`about-text ${aboutTextVisible ? 'visible' : ''}`}>
            <div className={`about-text-content ${aboutTextVisible ? 'visible' : ''}`}>
            As a Full-Stack Developer and recent Computer Science graduate based in London, I bring a keen technical mind to the table. My passion lies in crafting purposeful systems and developing products that enhance people's quality of life. Beyond the realm of technology, you'll often find me dedicated to my fitness and health journey, indulging in diverse cultures and cuisines or drawing inspiration from the wonders of nature. My inclination to try new experiences has given me an acquired taste, influencing my thinking to be more abstract and out-of-the-box, not only fuelling my creativity but also shaping my perspective in the ever-evolving landscape of development.
            </div>
          </div>

          {!initialLoad && (
            <a className={`text-cover-toggle ${aboutOpen ? 'about-close' : 'about-open'}`} onClick={toggleAbout}>
              {aboutOpen ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </a>
          )}
          <img className='cover-picture' src={profilePic} alt='profile picture' />
          <div className='cover-reveal'>
            <div className='cover'>
              <div id='reveal-5' />
            </div>
            <div className='cover'>
              <div id='reveal-4' />
            </div>
            <div className='cover'>
              <div id='reveal-3' />
            </div>

            <div className='cover'>
              <div id='reveal-6' />
            </div>
            <div className='cover'>
              <div id='reveal-1' />
            </div>
            <div className='cover'>
              <div id='reveal-2' />
            </div>

            <div className='cover'>
              <div id='reveal-7' />
            </div>
            <div className='cover'>
              <div id='reveal-8' />
            </div>
            <div className='cover'>
              <div id='reveal-9' />
            </div>
          </div>
        </div>
        <div className='name-sub-title'>Pritesh Parekh</div>
      </div>
    </div>
  )
}

export default Home;
