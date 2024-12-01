import React, { useState, useRef } from 'react';
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
      </div>
      <div className='projects-subheader'>
        <div id='scroll-box' className='project-nav'>
          <a onClick={() => handleProjectClick('TerraWater')}>TerraWater</a>
          <a onClick={() => handleProjectClick('CoffeeShop')}>Coffee Shop</a>
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

            {/* Coffee Shop */}
            {selectedProject === 'CoffeeShop' && (
            <div className='coffee_shop_container'>
                <div className='menu'>Menu</div>
                <div id='scroll-box' className='body'>body</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects_Web;
