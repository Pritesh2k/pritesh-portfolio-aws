import React, { useState, useEffect } from 'react';
import '../CSS/home.css'

import profilePic from '../Assets/Profile-pic.jpg'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Home() {

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
