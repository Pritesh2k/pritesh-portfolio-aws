import React, { useState, useEffect } from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../CSS/about.css'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import aboutBG from '../Assets/aboutBG.jpg'
import ScrollDownButton from './Other Components/ScrollDownButton';

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
            description: 'As a Junior Developer and recent Computer Science graduate based in London, I bring a keen technical mind to the table. My passion lies in crafting purposeful systems and developing products that enhance people\'s quality of life. Beyond the realm of technology, you\'ll often find me dedicated to my fitness and health journey, indulging in diverse cultures and cuisines or drawing inspiration from the wonders of nature. My inclination to try new experiences has given me an acquired taste, influencing my thinking to be more abstract and out-of-the-box, not only fuelling my creativity but also shaping my perspective in the ever-evolving landscape of development.',
            year: '',
            type: 'Present',
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
            description: 'Amidst the challenges posed by the COVID pandemic, I assumed the role of a Python Private Tutor at Fun Tech, a prominent private teaching organisation based in the UK, specialising in various programming languages, AI, game design, and engineering. In this capacity, I adeptly conducted foundation-level classes for a diverse cohort of 8 students ranging from 7 to 16 years old. Simultaneously, I facilitated intermediate-level classes tailored for GCSE and A-Level students. Beyond Python tutoring, I seized the opportunity to contribute to the development of a Student/Tutor portal. When a member of the development team became unavailable, I volunteered my services, and the team welcomed my involvement. My responsibilities encompassed crafting the front end of the portal for both students and teachers using React.js, HTML, and CSS. Additionally, I undertook the task of connecting the SQL database, ensuring the seamless integration of placeholder values at specific locations within the database.',
            year: '2020 ~ 2021',
            type: 'Employment',
            keywords: ['Python Tutor', 'System Development', 'SQL', 'JSON', 'API', 'HTML', 'CSS', 'React.JS'],
        },
        {
            id: 4,
            title: 'Swipe Right PR',
            description: 'During university, I worked as an Account Assistant for a start-up PR company called Swipe Right PR, a leading global esports and gaming communications agency that elevates brands and helps build communities, serving clients such as NVIDIA, Red Bull, ESI, and more. My primary responsibilities included Data Management and Statistics, involving entering and updating data within the agency management system. I successfully generated balance sheets, income statements, and cash flow statements for NVIDIA, Alpine, and Team Vitality accounts using SQL and Python, as requested by my manager. Embracing the start-up culture at Swipe Right, I undertook various roles, including writing blogs and articles for clients, conducting sentiment research using Meltwater, and producing monthly reports. However, the project I found most enjoyable was the Web Development initiative. Thanks to the nature of my degree, I had the opportunity to contribute to the redesign of Swipe Right PR\'s static website. Collaborating with freelance web designers, we utilised the Node.js framework and JavaScript, enhancing both the overall appeal and functionality of the website.',
            year: '2021 ~ 2023',
            type: 'Employment',
            keywords: ['Web Design', 'Data Management', 'Statistics', 'Project Architecture', 'Event Planning', 'Reports', 'Research', 'Article Writting'],
        },
        {
            id: 5,
            title: 'BSc Computer Science',
            description: 'During university, I undertook various modules that significantly contributed to the development of my computational thinking, programming ability, best practices, and knowledge in the field. In my second year, I collaborated with a group to successfully build a social media platform. The web application aimed to connect like-minded individuals, allowing them to discuss, learn, and positively contribute to one or more Sustainable Development Goals established by the UN. In this project, I played a pivotal role in designing the front end (using React.js and CSS) and configuring/integrating the back-end server (MySQL, employing Node.js and the MySQL API). The result was a functional, Facebook-like social media platform with correctly operating components designed by multiple contributors. I specifically designed and developed the HomeScreen, incorporating features such as random user post rendering, comment sections per post, reactions to comments, and site navigation to other pages, including user profiles. This project provided me with a deeper understanding of frameworks, API configuration and usage, user design, user experience, software integration, and version control using GitHub. In my final year, I developed a timely crime information system, which included APIs, a Crime Map, and an AI prediction model, among other features. You can find more details about this project in the portfolio section below!',
            year: '2020 ~ 2023',
            type: 'Education',
            keywords: ['Artificial Intelligence', 'Cybersecurity', 'Software Engineering', 'Timely Crime Information Application', 'Software Development and Management', 'Networks and Operating Systems', 'Algorithms', 'Data and Information', 'Software Design', 'Information Systems and Organisations'],
        },
    ];

    return (
        <>
            <div className='about-container-wrapper'>
                {/* <ScrollDownButton /> */}
                <img className='about-background-image' src={aboutBG} />
                <div className='above-img-container'>

                    <div className='about-leftside-container'>
                        <div className='left-side-title'>
                            <p>Hello<span>,</span> <br /> I<span>'</span>m Pritesh<span>.</span></p>
                        </div>
                        <div className='left-side-links'>
                            <a href='https://github.com/Pritesh2k'><GitHubIcon fontSize='large' /></a>
                            <a href='https://www.linkedin.com/in/pritesh-parekh2000/'><LinkedInIcon fontSize='large' /></a>
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
