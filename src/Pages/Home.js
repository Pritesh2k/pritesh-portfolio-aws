import React, { useState } from 'react';
import '../CSS/home.css';
import profilePic from '../Assets/Profile-pic.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {
  // State to track if the light is toggled
  const [isGreen, setIsGreen] = useState(true);

  // Handle button click to toggle the color
  const handleToggle = () => {
    setIsGreen(!isGreen);
  };

  // Dynamic styles for the button based on state
  const buttonStyle = {
    border: 'none',
    boxShadow: isGreen
      ? '0px 0px 25px 10px rgba(255, 0, 0, 0.03), 0px 0px 500px 50px rgba(255, 0, 0, 0.04)'
      : '0px 0px 25px 10px rgba(255, 0, 0, 0.356), 0px 0px 500px 50px rgba(255, 0, 0, 0.534)',
    transition: 'all 0.3s ease-in-out'
  };

  // Dynamic styles for the light container
  const lightStyle = {
    opacity: isGreen ? '0' : '1',
    transition: 'opacity 0.5s ease-in-out',
    pointerEvents: isGreen ? 'auto' : 'none'
  };


  return (
    <div className="home-container">
      <div className="home-subheader">
        <div className="picture-container">
          <img className="cover-picture" src={profilePic} alt="profile" />
          <div className="link-container">
            <div className='link'>
              <a href="https://github.com/Pritesh2k" className="github">
                <GitHubIcon fontSize="large" />
              </a>
            </div>
            <div className='link'>
              <a href="https://www.linkedin.com/in/pritesh-parekh2000/" className="linkedIn">
                <LinkedInIcon fontSize="large" />
              </a>
            </div>
          </div>

          <div className="light" style={lightStyle}>
            <div id="lineh1"></div>
            <div id="lineh2"></div>
            <div id="lineh3"></div>
            <div id="lineh4"></div>
            <div id="lineh5"></div>
            <div id="lineh6"></div>
            <div id="lineh7"></div>
            <div id="lineh8"></div>
            <div id="lineh9"></div>
            <div id="lineh10"></div>
            <div id="lineh11"></div>
            <div id="lineh12"></div>
          </div>

        </div>
      </div>
      <div className="home-header">
        <div className="home-intro-name">
          <div className="welcome-changes">Welcome</div>
          <div className="port-my">My</div>
          <div className="port-name-is">Name Is</div>
          <div className="prot-changes">Pritesh</div>
          <button
            className="light-toggle-btn"
            onClick={handleToggle}
            style={buttonStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;