import React, { useState } from 'react';
import '../CSS/portfolio.css';

function Portfolio() {
  const [currentItem, setCurrentItem] = useState(1);

  const handlePrevClick = () => {
    setCurrentItem((prevItem) => (prevItem > 1 ? prevItem - 1 : 3));
  };

  const handleNextClick = () => {
    setCurrentItem((prevItem) => (prevItem < 3 ? prevItem + 1 : 1));
  };

  return (
    <div className="portfolio-container">
      <input type="radio" name="slider" id="item-1" checked={currentItem === 1} />
      <input type="radio" name="slider" id="item-2" checked={currentItem === 2} />
      <input type="radio" name="slider" id="item-3" checked={currentItem === 3} />

      <div className="portfolio-cards">
        <label className="portfolio-card" htmlFor="item-1" id="song-1">
          <img src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80" alt="song" />
        </label>
        <label className="portfolio-card" htmlFor="item-2" id="song-2">
          <img src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" alt="song" />
        </label>
        <label className="portfolio-card" htmlFor="item-3" id="song-3">
          <img src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="song" />
        </label>
      </div>

      <div className="portfolio-player">
        <div className="portfolio-upper-part">
          <div className="portfolio-play-icon">
            <svg width="20" height="20" fill="#2992dc" stroke="#2992dc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-play" viewBox="0 0 24 24">
              <defs />
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
          </div>
          <div className="portfolio-info-area" id="test">
            <label className="portfolio-song-info" id="song-info-1">
              <div className="portfolio-title">Bunker</div>
              <div className="portfolio-sub-line">
                <div className="portfolio-subtitle">Balthazar</div>
                <div className="portfolio-time">4.05</div>
              </div>
            </label>
            <label className="portfolio-song-info" id="song-info-2">
              <div className="portfolio-title">Words Remain</div>
              <div className="portfolio-sub-line">
                <div className="portfolio-subtitle">Moderator</div>
                <div className="portfolio-time">4.05</div>
              </div>
            </label>
            <label className="portfolio-song-info" id="song-info-3">
              <div className="portfolio-title">Falling Out</div>
              <div className="portfolio-sub-line">
                <div className="portfolio-subtitle">Otzeki</div>
                <div className="portfolio-time">4.05</div>
              </div>
            </label>
          </div>
        </div>
        <div className="portfolio-progress-bar">
          <span className="portfolio-progress" />
        </div>
      </div>

      <button onClick={handlePrevClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default Portfolio;
