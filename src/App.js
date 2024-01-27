import React, { useEffect, useState } from 'react';
import './App.css';
import Portfolio from './JS/Portfolio';
import Skills from './JS/Skills';
import Hero from './JS/Hero';
import About from './JS/About';
import EmailIcon from '@mui/icons-material/Email';
import Skills2 from './JS/Skills2';
import Extras from './JS/Extras';

function App() {
  const [activeLink, setActiveLink] = useState('about');
  const [mainOpacity, setMainOpacity] = useState(1);

  useEffect(() => {
    const navCheckbox = document.getElementById('nav');
    const mainElement = document.querySelector('main');

    const handleClick = () => {
      // Toggle the "nav-open" class on the body
      const isOpen = navCheckbox.checked;
      mainElement.style.opacity = isOpen ? 0 : 1;
      setMainOpacity(isOpen ? 0 : 1);
    };

    if (navCheckbox) navCheckbox.addEventListener('change', handleClick);

    // Cleanup event listener on component unmount
    return () => {
      if (navCheckbox) navCheckbox.removeEventListener('change', handleClick);
    };
  }, []);

  useEffect(() => {
    // JavaScript code to uncheck the checkbox when nav__link is clicked
    const navCheckbox = document.getElementById('nav');
    const aboutLink = document.getElementById('aboutLink');
    const skillsLink = document.getElementById('skillsLink');
    const portfolioLink = document.getElementById('portfolioLink');
    const extrasLink = document.getElementById('extrasLink');
    const contactLink = document.getElementById('contactLink');

    const handleClick = () => {
      navCheckbox.checked = false;
    };

    if (aboutLink) aboutLink.addEventListener('click', handleClick);
    if (skillsLink) skillsLink.addEventListener('click', handleClick);
    if (portfolioLink) portfolioLink.addEventListener('click', handleClick);
    if (extrasLink) extrasLink.addEventListener('click', handleClick);
    if (contactLink) contactLink.addEventListener('click', handleClick);

    // Cleanup event listeners on component unmount
    return () => {
      if (aboutLink) aboutLink.removeEventListener('click', handleClick);
      if (skillsLink) skillsLink.removeEventListener('click', handleClick);
      if (portfolioLink) portfolioLink.removeEventListener('click', handleClick);
      if (extrasLink) extrasLink.removeEventListener('click', handleClick);
      if (contactLink) contactLink.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-contianer-wrapper">
          <Hero />
        </div>
      </header>

      <nav className="sticky navbar">
        <div className="brand display__logo">
          <a href="#top" className="nav__link">
            {' '}
            <span>Pritesh Parekh</span>
          </a>
        </div>

        <input type="checkbox" id="nav" className="hidden" />
        <label htmlFor="nav" className="nav__open">
          <i></i>
          <i></i>
          <i></i>
        </label>
        <div className="nav">
          <ul className="nav__items">
            <li className={`nav__item ${activeLink === 'about' ? 'active' : ''}`}>
              <a href="#about" className="nav__link" id="aboutLink" onClick={() => setActiveLink('about')}>
                About
              </a>
            </li>
            <li className={`nav__item ${activeLink === 'skills' ? 'active' : ''}`}>
              <a href="#skills" className="nav__link" id="skillsLink" onClick={() => setActiveLink('skills')}>
                Skills
              </a>
            </li>
            <li className={`nav__item ${activeLink === 'portfolio' ? 'active' : ''}`}>
              <a href="#portfolio" className="nav__link" id="portfolioLink" onClick={() => setActiveLink('portfolio')}>
                Portfolio
              </a>
            </li>
            <li className={`nav__item ${activeLink === 'extras' ? 'active' : ''}`}>
              <a href="#extras" className="nav__link" id="extrasLink" onClick={() => setActiveLink('extras')}>
                Extras
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link" id="contactLink" onClick={() => setActiveLink('contact')}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main style={{ opacity: mainOpacity }}>
        <section className="portfolio" id="about">
          <div className="about-container-wrapper">
            <About />
          </div>
        </section>
        <section className="portfolio" id="skills">
          <div className="skills-container-wrapper">
            <Skills2 />
          </div>
        </section>
        <section className="portfolio" id="portfolio">
          <div className="portfolio-container-wrapper">
            <Portfolio />
          </div>
        </section>
        <section className="extras" id="extras">
          <div className="extras-container-wrapper">
            <Extras />
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className='footer-links'>
          <p>Get In Touch</p>
          <div className='foot-line'/>
          <a href='mailto:priteshparekh237@gmail.com'><EmailIcon fontSize='large' /></a>
          <div className='notice'>NOTICE: Although the PC and Laptop version of this application is suitable for deployment, bugs and styling issues may be apparent <br/> for Mobiles and Tablets. Please note that these existing issues and bugs will be fixed</div>
        </div>
      </footer>
    </>
  );
}

export default App;
