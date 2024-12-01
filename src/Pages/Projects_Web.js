import React, { useState } from 'react';
import '../CSS/projects_Web.css';

import Terra_Water from '../Assets/terra_home.png'

function Projects_Web() {
  const [selectedProject, setSelectedProject] = useState('FYP');

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
  };

  const redirectToWebsite = () => {
    window.open('https://www.terrawaterindonesia.com/', '_blank');
};

  return (
    <div className='projects-container'>
      <div className='projects-header'>
        <div className='projects-title'>Projects</div>
        <div className='projects-line' />
        <div className='projects-sub-title'>Web UI</div>
      </div>
      <div className='projects-subheader'>
        <div id='scroll-box' className='project-nav'>
          <a onClick={() => handleProjectClick('TerraWater')}>TerraWater</a>
        </div>

        {/* Render project content based on selectedProject */}
        <div className='projects-scroll-container'>
          {selectedProject === 'TerraWater' && (
            <div className='TerraWater_container'>
                <img className='terra_img' src={Terra_Water}/>
                <div className='Terra_info'>
                    <ul>
                        <li>Hosted On: Wix</li>
                        <li>Assets: Terra Water Indonesia</li>
                        <li>Designed By: Pritesh</li>
                        <button className='terra_btn' onClick={()=>{
                            redirectToWebsite()
                        }}>Visit Site</button>
                    </ul>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects_Web;
