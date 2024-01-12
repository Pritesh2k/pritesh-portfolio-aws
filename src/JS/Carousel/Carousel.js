import React from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Carousel/carousel.css'

import crimeMap from '../../Assets/crime-map.png'
import webdev from '../../Assets/webdev.jpg'
import networkImg from '../../Assets/networkImg.jpg'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Carousel() {

    function CustomPrevArrow({ onClick }) {
        return (
            <button className="custom-arrow custom-arrow-prev" onClick={onClick}>
                <ChevronLeftIcon fontSize='large' />
            </button>
        );
    }

    function CustomNextArrow({ onClick }) {
        return (
            <button className="custom-arrow custom-arrow-next" onClick={onClick}>
                <ChevronRightIcon fontSize='large' />
            </button>
        );
    }


    const portfolioItems = [
        {
            id: 1,
            image: webdev,
            title: 'Portfolio',
            description: 'My Portfolio is made using the React.js framework and css. This project is intended to showcase myself, my talents, achievements and other projects im working or have worked on. My portfolio is hosted using AWS allowing me to develop this using a CI/CD approach. I have also configured and usaged the Firebase API to fetch stored videos and render them within the skills section.',
            year: '2023',
            link: 'https://github.com/Pritesh2k/pritesh-portfolio-aws',
            keywords: ['React.js', 'Responsive', 'AWS', 'Firebase API', 'CI/CD'],
        },
        {
            id: 2,
            image: crimeMap,
            title: 'Timely Crime Information Application',
            description: 'Built as my Finaly Year project at University, this system aims to provide crime information to users in a timely manner to help prevent people being a victim to crime - using a continuously updated dataset maintained by the Police force in England. This project was built using Android Studios and followed many research papers combining the best tips for crime prevention, personal saftey and crime detection. I followed an Agile approach utilising a Feature Driven methodology as well as attempting to make the system as real-time as possible using News API. The system included features such as: a Crime Map (rendering crimes pulled from the Police.Data API), Crime Prediction Model (using R packages and Random Forest), News APIs (based on the users locality) and an SOS System allowing users to call the police when in danger.',
            year: '2022',
            link: 'https://github.com/Pritesh2k/FinalYearProject',
            keywords: ['Android Studios', 'Java', 'R Packages', 'Random Forest', 'Agile - Feature Driven Methodology', 'APIs', 'Crime Map', 'Crime - Prediction', 'SOS Feature'],
        },
        {
            id: 3,
            image: networkImg,
            title: 'TCP Packet Monitoring',
            description: 'Configured a Client and Server class allowing communication between the two instances using Python sockets, utilising IPv4 addressing and TCP protocols. Monitored the packets being sent both ports using Wireshark - opensource packet analyser for networks - to gain a better understanding of how packets are sent under a TCP protocol.',
            year: '2023',
            link: 'https://github.com/Pritesh2k/SimplePythonServer',
            keywords: ['Python', 'Sockets', 'IPv4', 'TCP Protocol', 'Wireshark'],
        },
    ];

    return (
        <>
            <div className="carousel-container-wrapper">
                <ReactCarousel
                    autoPlay
                    infiniteLoop
                    showArrows
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}
                    interval={100000}
                    transitionTime={500}

                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && <CustomNextArrow onClick={onClickHandler} />
                    }

                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && <CustomPrevArrow onClick={onClickHandler} />
                    }
                >
                    {portfolioItems.map((item) => (
                        <div key={item.id} className="carousel-slide">
                            <div className="image-container">
                                <img className="carousel-image" src={item.image} alt={`Slide ${item.id}`} />
                                <div className='carousel-context'>
                                    <div className='carousel-context-title-container'>
                                        <div className='carousel-context-title'>
                                            {item.title} {/* Insert dynamic title */}
                                        </div>
                                        <div className='carousel-context-date'>
                                            {item.year} {/* Insert dynamic year */}
                                        </div>
                                    </div>
                                    <div className='carousel-contect-text'>
                                        <p>{item.description}</p> {/* Insert dynamic description */}
                                    </div>
                                    <div className='carousel-keywords-link-container'>
                                        <div className='carousel-keywords'>
                                            {item.keywords.join(' | ')} {/* Insert dynamic keywords */}
                                        </div>
                                        <div className='project-link'>
                                            {item.link && <a className="text-hover" href={item.link}>Link To Project</a>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </ReactCarousel>
            </div>
        </>
    );
}

export default Carousel;
