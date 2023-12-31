import React from 'react';
import '../CSS/hero.css';

import profilePic from '../Assets/Profile-pic.jpg'

function Hero() {
    return (
        <>
            <div className='hero-container'>
                <div className='header-image-container'>
                    <img className='header-image' src={profilePic} alt='image'/>
                </div>
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
                    <div className='h1-text'>
                        <span>T</span>
                        <span>o</span>
                    </div>
                    <div className='h1-text'>
                        <span>M</span>
                        <span>y</span>
                    </div>
                    <div className='h1-text'>
                        <span>P</span>
                        <span>o</span>
                        <span>r</span>
                        <span>t</span>
                        <span>f</span>
                        <span>o</span>
                        <span>l</span>
                        <span>i</span>
                        <span>o</span>
                    </div>
                </div>
                {/* <div className="scroll-downs">
                    <div className="mousey">
                        <div className="scroller"></div>
                    </div>
                    <div className='mouse-text'>
                        Scroll To Discover
                    </div>
                </div> */}
            </div>
        </>
    );
}

export default Hero;
