import React from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../CSS/extras.css'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Extras() {
    const portfolioItems = [
        {
            id: 1,
            title: 'Weather API',
            description: 'AP1 Description',
            year: '2023',
            keywords: ['API'],
        },
        {
            id: 2,
            title: 'News API',
            description: 'AP1 Description',
            year: '2022',
            keywords: ['API'],
        },
        {
            id: 3,
            title: 'API3',
            description: 'AP1 Description',
            year: '2023',
            keywords: ['API'],
        },
    ];

    function CustomPrevArrow({ onClick }) {
        return (
            <button className="extras-custom-arrow extras-custom-arrow-prev" onClick={onClick}>
                <ChevronLeftIcon fontSize='large' />
            </button>
        );
    }

    function CustomNextArrow({ onClick }) {
        return (
            <button className="extras-custom-arrow extras-custom-arrow-next" onClick={onClick}>
                <ChevronRightIcon fontSize='large' />
            </button>
        );
    }

    return (
        <>
            <div className='extras-container'>
                <div className='extras-wrapper'>
                    <ReactCarousel
                        autoPlay
                        infiniteLoop
                        showArrows
                        showThumbs={false}
                        showStatus={false}
                        showIndicators={false}
                        interval={10000}
                        transitionTime={500}
                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && <CustomNextArrow onClick={onClickHandler} />
                        }
                        renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            hasPrev && <CustomPrevArrow onClick={onClickHandler} />
                        }
                    >
                        {portfolioItems.map((item) => (
                            <div key={item.id} className="extras-carousel-slide">
                                <div className="extras-content">
                                    <h2>{item.title}</h2>
                                    <img src='' alt='pic'></img>
                                    <p>{item.description}</p>
                                    <div>
                                        {item.keywords.map((keyword, index) => (
                                            <span key={index} className="keyword">{keyword}</span>
                                        ))}
                                    </div>
                                    <p>{item.year}</p>
                                </div>
                            </div>
                        ))}
                    </ReactCarousel>
                </div>
                <div className='showcase-extras'>
                    API details and usage will go here 
                </div>
            </div>
        </>
    );
}

export default Extras;
