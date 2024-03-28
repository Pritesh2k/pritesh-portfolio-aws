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
          <a onClick={() => handleProjectClick('FYP')}>Timely Crime Information System</a>
          <a onClick={() => handleProjectClick('web-portfolio')}>Web Portfolio</a>
          <a onClick={() => handleProjectClick('python-scripting')}>Python Client Server</a>
        </div>

        {/* Render project content based on selectedProject */}
        <div className='projects-scroll-container'>
          {selectedProject === 'FYP' && (
            <div id='FYP' className='project-content'>
              <div className='project-description'>
                <div className='project-title'>
                  Timley Crime Information System
                </div>
                <a href='https://github.com/Pritesh2k/FinalYearProject' className='project-link'>
                  <GitHubIcon fontSize='large' />
                </a>

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
          )}

          {selectedProject === 'web-portfolio' && (
            <div id='web-portfolio' className='project-content'>
              <div className='project-description'>
                <div className='project-title'>
                  web-portfolio
                </div>
                <a href='https://github.com/Pritesh2k/pritesh-portfolio-aws' className='project-link'>
                  <GitHubIcon fontSize='large' />
                </a>

                <div className='project-context'>
                  <div className='methods-header'>Methods & Technuiqes</div>
                  <ul className='project-list'>
                    <li>AWS Cloud</li>
                    <li>Continuous Integration / Continuous Deployment</li>
                    <li>Git - Version Control</li>
                    <li>React Framework</li>
                    <li>JavaScript & CSS</li>
                    <li>System Design</li>
                    <li>UX Principles</li>
                  </ul>

                  <div className='methods-header'>Features</div>
                  <ul className='project-list'>
                    <li>Personal Presentation of aquired skills and worked on projects</li>
                    <li>Responsiveness</li>
                    <li>Site Theme</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {selectedProject === 'python-scripting' && (
            <div id='python-scripting' className='project-content'>
              <div className='project-description'>
                <div className='project-title'>
                  Python Client Server
                </div>
                <a href='https://github.com/Pritesh2k/SimplePythonServer' className='project-link'>
                  <GitHubIcon fontSize='large' />
                </a>

                <div className='project-context'>
                  <div className='methods-header'>Methods & Technuiqes</div>
                  <ul className='project-list'>
                    <li>Python Script</li>
                    <li>Python Client & Server Sockets</li>
                    <li>TCP / IPv4</li>
                    <li>WireShark</li>
                  </ul>

                  <div className='methods-header'>Features</div>
                  <ul className='project-list'>
                    <li>Continuous Communication between Client and Server until user chooses to exit</li>
                    <li>Local port packet monitoring via WireShark</li>
                  </ul>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
