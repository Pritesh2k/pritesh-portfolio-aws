import React from 'react'
import Carousel from './Carousel/Carousel';

import '../CSS/portfolio.css'

import pandasIMG from '../Assets/python.jpg';
import crimeMap from '../Assets/crime-map.png'
import facialRec from '../Assets/facial-recognition.png'
import webdev from '../Assets/webdev.jpg'

function Portfolio() {

    // const portfolioItems = [
    //     {
    //         id: 1,
    //         image: pandasIMG,
    //         title: 'Python',
    //         description: 'I am actively challenging myself to elevate my data analysis skills, currently residing at a low intermediate level. To enhance these capabilities, I am leveraging Python\'s Pandas library to investigate a crime dataset obtained from the Police.UK database. My objective is to explore diverse techniques, methods, and best practices in order to achieve proficiency in this domain. My aim is to analyse various types of datasets, identify trends, uncover anomalies, and gain a deeper understanding of the underlying factors shaping the data. Follow me on this journey through GitHub',
    //         year: 2023,
    //         link: 'https://github.com/Pritesh2k/PoliceDataAnalysis',
    //         keywords: ['Data Analysis', 'Python', 'Pandas', 'Statistics', 'Cleaning|Pre-Processing', 'Crime Dataset'],
    //     },
    //     {
    //         id: 2,
    //         image: crimeMap,
    //         title: 'Timely Crime Information System',
    //         description: 'Data Collection: Pulling data from the Police.UK API. Data Storage: Setting Up Google Firebase. Crime Map: Pulling data the Police.UK API and Displaying Onto Google Maps. AI Prediction Model: Predicting the likelihood of future crime rates with a confidence level, using R packages and Python. Location-Based News Feed: Pulling data from mainstream and local news APIs. SOS System: Allowing users to contact authorities with a single tap. The process involved creating individual flowcharts for each system feature, illustrating their functionality and usability. These flowcharts were then interconnected to form a comprehensive system flow diagram, providing a visual representation of the cohesive functioning of the entire system. After implementing each feature, thorough testing was conducted to verify its proper functionality. Certain features, like the AI prediction model, required testing after the implementation of the Crime Map. Consequently, I prioritised the development sequence to maximise efficiency by determining which feature should be developed first. In the Research Phase, my initial plan was to integrate the Twitter API to extract live crime data from official accounts. However, due to a company undergoing restructuring, the API became unavailable. Therefore, I shifted to utilising a Location-Based News system as an alternative. Though lacking the real-time immediacy that Twitter would have provided, it still offered timely crime information.',
    //         year: 2022,
    //         link: 'https://github.com/Pritesh2k/FinalYearProject',
    //         keywords: ['Java', 'Python', 'R + Packages', 'Agile (Feature-Driven) Methodology ', 'Crime Map', 'AI Prediction Model (Random Forest)'],
    //     },
    //     {
    //         id: 3,
    //         image: webdev,
    //         title: 'Facial Recognition',
    //         description: 'Utilised Python, employing the OpenCV library and online resources to create facial recognition software. This software analyses and compares a detected face against recorded images (stored in a folder with a given name), generating a confidence level. If the confidence level exceeds a predefined threshold, the name of the identified person is displayed.',
    //         year: 2023,
    //         keywords: ['Open CV', 'Python', 'Facial Recogntion', 'Tutorial-Based'],
    //     },
    // ];
    
    return (
        <>
        <div className='portfolio-container'>
            <Carousel/>
        </div>
        </>
    )
}

export default Portfolio