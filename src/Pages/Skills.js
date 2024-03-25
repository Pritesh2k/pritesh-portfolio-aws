import React, { useState } from 'react';
import '../CSS/skills.css';

import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

function Skills() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (id) => {
    if (selectedCard === id) {
      setSelectedCard(null); // Unmount if already selected
    } else {
      setSelectedCard(id); // Mount if not already selected
    }
  };

  return (
    <div className='skills-container'>
      <div className='skills-subheader'>
        <div className='skills-title'>Skills</div>
        <div className='skills-line' />
      </div>

      <div className='skills-header'>
        <div className='skills-content-container'>
          <div className='top-container'>
            <div className='top-left'>
              Technical
              <div className='skill-container-line alt'></div>
              <div className='click-me'>Click Me</div>
            </div>
            <div className='top-right'>
              Academic
              <div className='skill-container-line'></div>
              <div className='click-me'>Click Me</div>
            </div>
          </div>
          <div className='bottom-container'>
            <div className='bottom-left'>
              Work Place
              <div className='skill-container-line'></div>
              <div className='click-me'>Click Me</div>
            </div>
            <div className='bottom-right'>
              Certificates
              <div className='skill-container-line alt'></div>
              <div className='click-me'>Click Me</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
