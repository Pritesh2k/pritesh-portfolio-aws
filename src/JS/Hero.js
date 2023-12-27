import React from 'react';
import '../CSS/hero.css';

import video from '../Assets/hero.mp4';

function Hero() {
    return (
        <>
            <div className='wrapper'>
                <div className='box'>
                    <video autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </>
    );
}

export default Hero;
