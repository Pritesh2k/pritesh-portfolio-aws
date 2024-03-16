import React, { useState, useEffect } from 'react';
import '../CSS/home-copy.css'

import profilePic from '../Assets/Profile-pic.jpg'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Home() {

  return (
    <>
      <div className='home-container'>
        <div className='home-subheader'>
          <div className='picture-container'>
            <img className='cover-picture' src={profilePic} alt='profile picture' />
            <div className='link-container'>
              <div className='link'><GitHubIcon /></div>
              <div className='link'><LinkedInIcon /></div>
            </div>
          </div>
          <div className='name-title'>Portfolio</div>
        </div>
        <div className='home-header'>
          <div className='home-intro-container'>hi my name is,</div>
          <div className='home-intro-name'>Pritesh Parekh</div>
          <div className='home-short-desc'>I build websites and systems</div>
          <div className='home-line' />
          <div className='home-short-about'>I am a Full-Stack developer building (and occasionally designing) exceptional digital experiences and systems. I am currently focused on building accessible, quality of life products for everyday use.</div>
        </div>
      </div>
    </>
  )
}

export default Home;
