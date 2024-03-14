import React, { useState } from 'react';
import '../CSS/about.css';
import MyselfSection from './Components/MyselfSection'; // Import MyselfSection component
import JourneySection from './Components/JourneySection'; // Import JourneySection component

function About() {
    const [activeSection, setActiveSection] = useState('myself'); // Track active section

    const handleToggle = (section) => {
        setActiveSection(section); // Update active section when clicked
    };

    return (
        <div className='about-container'>
            <div className='about-header'>
                <div className='about-title'>About</div>
                <div className='about-line' />
            </div>
            <div className='about-subheader'>
                <div className='about-content-container'>
                    <div className='about-content-nav'>
                        <a className={`myself-title-toggle ${activeSection === 'myself' ? 'active' : ''}`} onClick={() => handleToggle('myself')}>
                            Myself
                        </a>
                        <div className='vertical-line' />
                        <a className={`journey-title-toggle ${activeSection === 'journey' ? 'active' : ''}`} onClick={() => handleToggle('journey')}>
                            Journey
                        </a>
                    </div>
                    <div className='nav-line' />
                    <div className='about-tags'>
                        <ul>
                            <li>Technology</li>
                            <li>Pro-Active</li>
                            <li>Personable</li>
                            <li>Attentive</li>
                            <li>Resilient</li>
                        </ul>
                    </div>
                    <div className='about-content'>
                        {activeSection === 'myself' && <MyselfSection />}
                        {activeSection === 'journey' && <JourneySection />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
