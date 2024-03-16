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
        <div className='skills-grid'>
          <div id='t' className={`grid-item ${selectedCard === 't' ? 'selected' : ''}`} onClick={() => handleCardClick('t')}>
            <div className='card'>
              <div className='card-title'>
                <CodeIcon />
              </div>
              {selectedCard === 't' && <div className='description'>Description for CodeIcon</div>}
            </div>
          </div>
          <div id='wp' className={`grid-item ${selectedCard === 'wp' ? 'selected' : ''}`} onClick={() => handleCardClick('wp')}>
            <div className='card'>
              <div className='card-title'>
                <WorkIcon />
              </div>
              {selectedCard === 'wp' && <div className='description'>Description for WorkIcon</div>}
            </div>
          </div>
          <div id='ac' className={`grid-item ${selectedCard === 'ac' ? 'selected' : ''}`} onClick={() => handleCardClick('ac')}>
            <div className='card'>
              <div className='card-title'>
                <SchoolIcon />
              </div>
              {selectedCard === 'ac' && <div className='description'>Description for SchoolIcon</div>}
            </div>
          </div>
          <div id='c' className={`grid-item ${selectedCard === 'c' ? 'selected' : ''}`} onClick={() => handleCardClick('c')}>
            <div className='card'>
              <div className='card-title'>
                <VerifiedUserIcon />
              </div>
              {selectedCard === 'c' && <div className='description'>Description for VerifiedUserIcon</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
