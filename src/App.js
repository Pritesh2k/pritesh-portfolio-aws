import React, { useEffect } from 'react';
import './App.css';
import Portfolio from './JS/Portfolio';
import Skills from './JS/Skills';
import Hero from './JS/Hero';
import About from './JS/About';

function App() {

  useEffect(() => {
    const navCheckbox = document.getElementById('nav');
    const body = document.body;

    const handleClick = () => {
      // Toggle the "nav-open" class on the body
      body.classList.toggle('nav-open', navCheckbox.checked);
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
      <header className="header">
        <div className="header-contianer-wrapper">
          <Hero />
        </div>
      </header>

      <nav className="sticky navbar">
        <div className="brand  display__logo">
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
            <li className="nav__item">
              <a href="#about" className="nav__link" id="aboutLink">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link" id="skillsLink">
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link" id="portfolioLink">
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link" id="contactLink">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <section className="portfolio">
          <div id="about">
            <div className="about-container-wrapper">
              {/* <About/> */}
              About
            </div>
          </div>
        </section>
        <section className="portfolio">
          <div id="skills">
            <div className="skills-container-wrapper">
              <Skills />
            </div>
          </div>
        </section>
        <section className="portfolio">
          <div id="portfolio">
            <div className="portfolio-container-wrapper">
              <Portfolio />
            </div>
          </div>
        </section>
        <section className="contact">
          <div id="contact">
            <div className="contact-container-wrapper">
              Contact
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <h1>Footer</h1>
      </footer>
    </>
  );
}

export default App;
