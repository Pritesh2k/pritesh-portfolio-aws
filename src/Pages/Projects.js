import React, { useState } from 'react';
import '../CSS/projects.css';

import GitHubIcon from '@mui/icons-material/GitHub';

function Projects() {
  const [selectedProject, setSelectedProject] = useState('FYP');

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
  };

  return (
    <div className='projects-container'>
      <div className='projects-header'>
        <div className='projects-title'>Projects</div>
        <div className='projects-line' />
      </div>
      <div className='projects-subheader'>
        <div id='scroll-box' className='project-nav'>
          <a onClick={() => handleProjectClick('FYP')}>Timley Crime Information System</a>
          <a onClick={() => handleProjectClick('web-portfolio')}>Web Portfolio</a>
          <a onClick={() => handleProjectClick('python-scripting')}>Python Client Server Script</a>
        </div>

        {/* Apply 'active' class when selectedProject matches the ID */}
        <div id='FYP' className={`projects-scroll-container ${selectedProject === 'FYP' ? 'active' : ''}`}>
          <div className='project-description'>
            <div className='project-title'>
              Timley Crime Information System
            </div>
            <div className='project-link'>
              <GitHubIcon fontSize='large'/>
            </div>

            <div className='project-context'>
              <div className='methods-header'>Methods & Technuiqes</div>
              <ul className='project-list'>
                <li>Agile - Feature Driven Methodology</li>
                <li>System Design</li>
                <ul>
                  <li>Flow Charts</li>
                  <li>Wire Frames</li>
                  <li>UX Principles</li>
                </ul>
                <li>Java Object Orientated Programming</li>
                <li>Crime Prediction Analysis - Random Forest + R Packages, Python</li>
                <li>Maps & News API</li>
                <li>Database Management</li>
              </ul>

              <div className='methods-header'>Features</div>
              <ul className='project-list'>
                <li>Crime Map - Google API</li>
                <li>Locality based News Feed - News API + Location (Google Services)</li>
                <li>Emergency button - automatically dials 999</li>
                <li>Safety alerts - Alerts user when they enter 5km within recorded crime</li>
                <li>Prediction Analysis - determins the likley hood as percentage of future crime with coonfindence level</li>
              </ul>
            </div>
            
          </div>
        </div>

        {/* Repeat for other projects */}
      </div>
    </div>
  );
}

export default Projects;
