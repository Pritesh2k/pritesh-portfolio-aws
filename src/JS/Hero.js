import React, { useEffect, useState } from 'react';
import '../CSS/hero.css';

import profilePic from '../Assets/Profile-pic.jpg'

function Hero() {
    const [activeLink, setActiveLink] = useState('about');

    useEffect(() => {
        // JavaScript code to uncheck the checkbox when nav__link is clicked
        const navCheckbox = document.getElementById('nav');
        const aboutLink = document.getElementById('aboutLink');
        const skillsLink = document.getElementById('skillsLink');
        const portfolioLink = document.getElementById('portfolioLink');
        const contactLink = document.getElementById('contactLink');

        const handleClick = () => {
            navCheckbox.checked = false;
        };

        if (aboutLink) aboutLink.addEventListener('click', handleClick);
        if (skillsLink) skillsLink.addEventListener('click', handleClick);
        if (portfolioLink) portfolioLink.addEventListener('click', handleClick);
        if (contactLink) contactLink.addEventListener('click', handleClick);

        // Cleanup event listeners on component unmount
        return () => {
            if (aboutLink) aboutLink.removeEventListener('click', handleClick);
            if (skillsLink) skillsLink.removeEventListener('click', handleClick);
            if (portfolioLink) portfolioLink.removeEventListener('click', handleClick);
            if (contactLink) contactLink.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <>
            <div className='hero-container'>
                <div className='header-image-container'>
                    {/* <img className='header-image' src={background} alt='image' /> */}
                </div>
                <div className='hero-title-and-scroll-container'>
                    <img className='profile-image' src={profilePic} alt='image' />
                    <div className='hero-main-title-container'>
                        <div className='h1-text'>
                            <span>W</span>
                            <span>e</span>
                            <span>l</span>
                            <span>c</span>
                            <span>o</span>
                            <span>m</span>
                            <span>e</span>
                        </div>
                    </div>
                    <div className="scroll-downs">
                        <div className="mousey">
                            <div className="scroller"></div>
                        </div>
                        {/* <div className='mouse-text'>
                            Scroll To Discover
                        </div> */}
                    </div>
                </div>
                <div className='jump-to'>
                    <ul className='jump-to-list'>
                        <li className='jump-to-item first'>
                            <div className={`${activeLink === 'about' ? 'active' : ''}`}>
                                <a href="#about" className="nav__link" id="aboutLink" onClick={() => setActiveLink('about')}>
                                    About
                                </a>
                            </div>
                            <div className='jump-to-line' />
                        </li>
                        <li className='jump-to-item second'>
                            <div className={`${activeLink === 'skills' ? 'active' : ''}`}>
                                <a href="#skills" className="nav__link" id="skillsLink" onClick={() => setActiveLink('skills')}>
                                    Skills
                                </a>
                            </div>
                            <div className='jump-to-line' />
                        </li>
                        <li className='jump-to-item third'>
                            <div className={`${activeLink === 'portfolio' ? 'active' : ''}`}>
                                <a href="#portfolio" className="nav__link" id="portfolioLink" onClick={() => setActiveLink('portfolio')}>
                                    Portfolio
                                </a>
                            </div>
                            <div className='jump-to-line' />
                        </li>
                        <li className='jump-to-item fourth'>
                            <div className={`${activeLink === 'contact' ? 'active' : ''}`}>
                                <a href="#contact" className="nav__link" id="contactLink" onClick={() => setActiveLink('contact')}>
                                    Contact
                                </a>
                            </div>
                            <div className='jump-to-line' />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Hero;
