import React from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Carousel/carousel.css'

import pandasIMG from '../../Assets/python.jpg';
import crimeMap from '../../Assets/crime-map.png'
import webdev from '../../Assets/webdev.jpg'

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
            image: pandasIMG,
            title: 'Title',
            description: 'Description',
            year: 'Year',
            link: 'Link',
            keywords: ['Key', 'Words', 'Go', 'Here'],
        },
        {
            id: 2,
            image: crimeMap,
            title: 'Title',
            description: 'Description',
            year: 'Year',
            link: 'Link',
            keywords: ['Key', 'Words', 'Go', 'Here'],
        },
        {
            id: 3,
            image: webdev,
            title: 'Title',
            description: 'Description',
            year: 'Year',
            link: 'Link',
            keywords: ['Key', 'Words', 'Go', 'Here'],
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
                                            {item.link && <a href={item.link}>Link To Project</a>}
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
