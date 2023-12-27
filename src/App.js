
import './App.css';
import Skills from './JS/Skills';

function App() {
  return (
    <>
      <header class="header">
        <div className='header-contianer-wrapper'>

        </div>
      </header>

      <nav class="sticky navbar">
        <div class="brand  display__logo">
          <a href="#top" class="nav__link"> <span>Pritesh Parekh</span></a>
        </div>

        <input type="checkbox" id="nav" class="hidden" />
        <label for="nav" class="nav__open"><i></i><i></i><i></i></label>
        <div class="nav">
          <ul class="nav__items">
            {/* <li class="nav__item"><a href="#home" class="nav__link">Home</a></li> */}
            <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
            <li class="nav__item"><a href="#skills" class="nav__link">Skills</a></li>
            <li class="nav__item"><a href="#portfolio" class="nav__link">Portfolio</a></li>
            <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        <section class="about">
          <div id="about">
            <div className='about-container-wrapper'>
              About
            </div>
          </div>
        </section>
        <section class="portfolio">
          <div id="skills">
            <div className='about-container-wrapper'>
              <Skills/>
            </div>
          </div>
        </section>
        <section class="portfolio">
          <div id="portfolio">
            <div className='about-container-wrapper'>
              Portfolio
            </div>
          </div>
        </section>
        <section class="contact">
          <div id="contact">
            <div className='about-container-wrapper'>
              Contact
            </div>
          </div>
        </section>
      </main>

      <footer class="footer">
        <h1>Footer</h1>
      </footer>
    </>
  );
}

export default App;