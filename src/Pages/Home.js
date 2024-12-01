import React from 'react';
import '../CSS/home.css'

import profilePic from '../Assets/Profile-pic.jpg'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Home() {

  return (
    <>
      <div className='home-container'>
        <div className='home-subheader'>
          <div className='picture-container'>
            <img className='cover-picture' src={profilePic} alt='profile' />
            <div className='link-container'>
              <a href='https://github.com/Pritesh2k' className='link'><GitHubIcon fontSize='large'/></a>
              <a href='https://www.linkedin.com/in/pritesh-parekh2000/' className='link'><LinkedInIcon fontSize='large'/></a>
            </div>
            <div className='name-title'>Portfolio</div>
          </div>
        </div>
        <div className='home-header'>
          <div className='home-intro-container'>hi my name is,</div>
          <div className='home-intro-name'>Pritesh Parekh</div>
          <div className='home-short-desc'>
            I build websites and systems
          </div>
          <div className='home-line' />
          <div className='home-short-about'>I am a Full-Stack developer building anddesigning exceptional digital experiences and systems. I am currently focused on building accessible, quality of life products for everyday use.</div>
        </div>
      </div>
    </>
  )
}

export default Home;
