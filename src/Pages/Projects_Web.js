import React, { useState, useRef } from 'react';
import '../CSS/projects_Web.css';

import Terra_Water from '../Assets/terra_home.png'
import PortfolioIMG from '../Assets/Portfolio-img.png'

function Projects_Web() {
  const [selectedProject, setSelectedProject] = useState('FYP');

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
  };

  const redirectToWebsite = () => {
    window.open('https://www.terrawaterindonesia.com/', '_blank');
};
const mainContainerRef = useRef(null);
const handleScroll = (event) => {
    const container = mainContainerRef.current;
    const scrollBox = document.getElementById('scroll-box');
    const isMouseOverScrollBox = scrollBox && scrollBox.contains(event.target);
  
    if (isMouseOverScrollBox) {
      // Enable vertical scrolling if screen height is taller than width
      if (window.innerHeight > window.innerWidth) {
        container.scrollTop += event.deltaY;
      }
    } else {
      // Enable horizontal scrolling if width is greater than height
      if (window.innerWidth > window.innerHeight) {
        const delta = Math.max(-1, Math.min(1, (event.nativeEvent.wheelDelta || -event.nativeEvent.detail)));
        container.scrollLeft -= delta * 1000;
      }
    }
  };

  return (
    <div className='projects-container'>
      <div className='projects-header'>
        <div className='projects-title'>Projects</div>
        <div className='projects-line' />
        <div className='projects-sub-title'>Web UI</div>
        <div className='date-last-edited'>2025</div>
      </div>
      <div className='projects-subheader'>
        <div id='scroll-box' className='project-nav'>
        <a onClick={() => handleProjectClick('Portfolio')}>Portfolio</a>
          <a className='item' onClick={() => handleProjectClick('TerraWater')}>TerraWater</a>
        </div>

        {/* Render project content based on selectedProject */}
        <div className='projects-scroll-container'>
          {selectedProject === 'TerraWater' && (
            <div className='TerraWater_container'>
                <img className='terra_img' src={Terra_Water}/>
                <div className='Terra_info'>
                  <h1>Terra Water Indonesia</h1>
                    <ul>
                        <li><span className='bold'>Project Type:</span> Client | On-Site</li>
                        <li><span className='bold'>Website Hosted On:</span> Wix</li>
                        <li><span className='bold'>Assets By:</span> Terra Water Indonesia</li>
                        <li>-</li>
                        <li><span className='bold'>Designed By:</span> Pritesh</li>
                        <li><span className='bold'>Developed By:</span> Pritesh</li>
                        <li><span className='bold'>Date:</span> June 2024 (6 weeks)</li>
                    </ul>
                    <button className='terra_btn' onClick={()=>{
                            redirectToWebsite()
                        }}>Visit Site</button>
                </div>
            </div>
          )}

            {/* Coffee Shop */}
            {selectedProject === 'Portfolio' && (
            <div className='Portfolio_container'>
                <img className='Portfolio_img' src={PortfolioIMG}/>
                <div className='Portfolio_info'>
                  <h1>Portfolio</h1>
                    <ul>
                        <li><span className='bold'>Project Type:</span> Personal Project</li>
                        <li><span className='bold'>Website Hosted On:</span> AWS</li>
                        <li><span className='bold'>Assets By:</span> Pritesh</li>
                        <li>-</li>
                        <li><span className='bold'>Designed By:</span> Pritesh</li>
                        <li><span className='bold'>Developed By:</span> Pritesh</li>
                        <li><span className='bold'>Date:</span> February 2023</li>
                    </ul>
                    <button className='portfolio_btn'>You Are Currently Here</button>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects_Web;
