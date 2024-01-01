import React from 'react'
import Carousel from './Carousel/Carousel';

import '../CSS/portfolio.css'

import pandasIMG from '../Assets/python.jpg';
import crimeMap from '../Assets/crime-map.png'
import facialRec from '../Assets/facial-recognition.png'
import webdev from '../Assets/webdev.jpg'

function Portfolio() {
    
    return (
        <>
        <div className='portfolio-container'>
            <Carousel/>
        </div>
        </>
    )
}

export default Portfolio