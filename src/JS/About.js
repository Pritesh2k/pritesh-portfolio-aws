import React, { useState, useEffect } from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../CSS/about.css'

import GitHubIcon from '@mui/icons-material/GitHub';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import aboutBG from '../Assets/aboutBG.jpg'

function About() {

    const [currentDescription, setCurrentDescription] = useState('');

    function handleSlideChange(index) {
        setCurrentDescription(aboutItems[index].description);
    }

    useEffect(() => {
        // Set the initial description based on the first item in the array
        setCurrentDescription(aboutItems[0].description);
    }, []); // Empty dependency array ensures that it runs only once on mount

    function CustomPrevArrow({ onClick }) {
        return (
            <button className="about-custom-arrow about-custom-arrow-prev" onClick={onClick}>
                <ChevronLeftIcon fontSize='large' />
            </button>
        );
    }

    function CustomNextArrow({ onClick }) {
        return (
            <button className="about-custom-arrow about-custom-arrow-next" onClick={onClick}>
                <ChevronRightIcon fontSize='large' />
            </button>
        );
    }

    const aboutItems = [
        {
            id: 1,
            title: 'About Myself',
            description: 'I am Junior Developer - recent Computer Science graduate - based in London with a technical mind. I enjoy making systems of purpose and products people can benifit from to improve their quality of life. Outside of the tech-world you can find me working on my health in gym, experiencing different cultures and cuisines and appreiciating my greatest inspiration, nature. I do have an acquired taste due to trying different things which I believe influences my way of thinking - being more abstract and out of the box.',
            year: '',
            type: '',
            keywords: ['Technology', 'Gym', 'Food', 'Different Cultures', 'Art'],
        },
        {
            id: 2,
            title: 'A-Level',
            description: '',
            year: '2019',
            type: 'Education',
            keywords: ['Computer Science', 'Business', 'Law'],
        },
        {
            id: 3,
            title: 'Fun tech',
            description: 'During the COVID Pandemic, I became a Python Private Tutor at Fun Tech (a leading private teaching organisation based in the UK, specialising in various programming languges, AI, game design and engineering.) - teaching foundation level classes of 8 mixed skilled students ranging from 7 years to 16 years old and intermediate level clases for GCSE and A-Level students. Along side Python Teaching, I was given the oppertunity to aid the development of a Student/Tutor portal. A member of the development team was unable to work on the project during this time, and when I offered my services the team members agreed! I was tasked with developing the front-end of the portal for both student and teacher-side using React.js, HTML and CSS. I was also tasked with connecting the SQL database to push placeholder values to a specific location within the database.',
            year: '2020 ~ 2021',
            type: 'Employment',
            keywords: ['Python Tutor', 'System Development', 'SQL', 'JSON', 'API', 'HTML', 'CSS', 'React.JS'],
        },
        {
            id: 4,
            title: 'Swipe Right PR',
            description: 'During University, I worked as an Account Assitant for a start up PR company called Swipe Right PR (a leading global esports and gaming communications agency that elevates brands and helps build communities, serving clients such as NVIDIA, Red Bull, ESI and more). My main responsibilites included Data Management and Statistics, where I entered and updated data within the agency management system, successfully producing balance sheets, income statements, and cash flow statements for NVIDIA, Alpine and Team Vitality accounts using SQL and Python as per requested by my manager. Due to the start up culture Swipe Right embraced, I was given many differentiating roles such as writing blogs and articles for clients, conducting sentiment research using Meltwater as well as producing monthly reports. However the project I enjoyed the most was the Web Developement project, which I was able to be a part of due to the nature of my degree. to the redesign of Swipe Right PR\'s static website by collaborating with other freelance web designers, utilising the Node.js framework and JavaScript, enhancing the overall appeal and functionality.',
            year: '2021 ~ 2023',
            type: 'Employment',
            keywords: ['Web Design', 'Data Management', 'Statistics', 'Project Architecture', 'Event Planning', 'Reports', 'Research', 'Article Writting'],
        },
        {
            id: 5,
            title: 'BSc Computer Science',
            description: 'During University, I took many different and varying modules where I really developed my computational thinking, programming ability, best practises and knowledge in the field. During my second year I successfully built a social media platform as a group. The web application was to allow like-minded individuals to discuss learn and positively contribute to one or more Sustainable Developement Goals established by the UN. My role was to design the front-end (React.js and CSS) for our application and also help configure and integrate our back-end server (MySQL, using Node.js and the MySQL API) to our code. The end result was a working Facebook-like social media platform with correctly functioning components designed by multiple people. I designed and developed the functioning HomeScreen which included - random user post rendering, comment section per post, comment reactions per post, site navigation to other pages including user profile. This project allowed me to have a better understanding of frameworks, API configuration and usage, user design, user experience, software integration and version control using GitHub. I also developed a timely crime information system during my final year, including APIs, Crime Map and AI prediction model to name few - you can find this project in the portfolio section below!',
            year: '2020 ~ 2023',
            type: 'Education',
            keywords: ['Artificial Intelligence', 'Cybersecurity', 'Software Engineering', 'Timely Crime Information Application', 'Software Development and Management', 'Networks and Operating Systems', 'Algorithms', 'Data and Information', 'Software Design', 'Information Systems and Organisations'],
        },
    ];

    return (
        <>
            <div className='about-container-wrapper'>
                <img className='about-background-image' src={aboutBG} />
                <div className='above-img-container'>
                    <div className='about-leftside-container'>
                        <div className='left-side-title'>
                            <p>Hello<span>,</span> <br/> I'm Pritesh<span>.</span></p>
                        </div>
                        <div className='left-side-links'>
                            <a href='https://github.com/Pritesh2k'><GitHubIcon fontSize='large' /></a>
                        </div>
                        <div className='left-side-content'>
                            {currentDescription}
                        </div>
                    </div>
                    <div className='about-rightside-container'>
                        <ReactCarousel
                            // autoPlay
                            infiniteLoop
                            showArrows
                            showThumbs={false}
                            showStatus={false}
                            showIndicators={false}
                            interval={100000}
                            transitionTime={500}
                            onChange={handleSlideChange}

                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && <CustomNextArrow onClick={onClickHandler} />
                            }

                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && <CustomPrevArrow onClick={onClickHandler} />
                            }
                        >
                            {aboutItems.map((item) => (
                                <div key={item.id} className='about-carousel-slide'>
                                    <div className='about-carousel-image-container'>
                                        <div className='about-carousel-title'>{item.title}</div>
                                        <div className='additional-info-container'>
                                            {item.type && (
                                                <>
                                                    <div className='about-carousel-type'>{item.type}</div>
                                                    {item.year && <div className='about-carousel-type'>|</div>}
                                                </>
                                            )}
                                            {item.year && <div className='about-carousel-year'>{item.year}</div>}
                                        </div>
                                        <div className='about-carousel-keywords'>{item.keywords.join(' | ')}</div>
                                    </div>
                                </div>
                            ))}
                        </ReactCarousel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
