import React, { useState } from 'react';
import '../../CSS/journey.css';

import CloseIcon from '@mui/icons-material/Close';
import AllOutIcon from '@mui/icons-material/AllOut';

function JourneySection() {
    const [activeItem, setActiveItem] = useState(null);
    const [showMountableDiv, setShowMountableDiv] = useState(false);
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [keywords, setKeywords] = useState('');
    const [date, setDate] = useState('');

    const handleClick = (item) => {
        setActiveItem(item === activeItem ? null : item);
        setShowMountableDiv(item !== null); // Show the mountable div when an item is clicked
        setDescription(getDescription(item)); // Set the description based on the clicked item
        setTitle(getTitle(item)); // Set the title based on the clicked item
        setDate(getDate(item)); // Set the date based on the clicked item
        setKeywords(getKeywords(item)); // Set the keywords based on the clicked item
    };

    const handleUnmount = () => {
        setShowMountableDiv(false); // Hide the mountable div when unmount button is clicked
    };

    const getTitle = (item) => {
        switch (item) {
            case 'A-Level':
                return 'A-Level';
            case 'FunTech':
                return 'Python Tutor';
            case 'SRPR':
                return 'Junior Account Assistant';
            case 'BSC-cp':
                return 'BSc Computer Science';
            default:
                return '';
        }
    };

    const getDate = (item) => {
        switch (item) {
            case 'A-Level':
                return '2019';
            case 'FunTech':
                return '2020 - 2021';
            case 'SRPR':
                return '2021 - 2023';
            case 'BSC-cp':
                return '2020 - 2023';
            default:
                return '';
        }
    };

    const getKeywords = (item) => {
        switch (item) {
            case 'A-Level':
                return 'Education';
            case 'FunTech':
                return 'Python | System Development | SQL | JSON | APIs | HTML & CSS | React Framework';
            case 'SRPR':
                return 'Web Design | Data Management | Statistics | Project Architecture | Event Planning | Reports | Research | Article Writing';
            case 'BSC-cp':
                return 'BSc Computer Science, 2020 - 2023';
            default:
                return '';
        }
    };

    const getDescription = (item) => {
        switch (item) {
            case 'A-Level':
                return 'Succefully Achieved B Grade In Computer Science, Business and Law';
            case 'FunTech':
                return 'Amidst the challenges posed by the COVID pandemic, I assumed the role of a Python Private Tutor at Fun Tech, a prominent private teaching organisation based in the UK, specialising in various programming languages, AI, game design, and engineering. In this capacity, I adeptly conducted foundation-level classes for a diverse cohort of 8 students ranging from 7 to 16 years old. Simultaneously, I facilitated intermediate-level classes tailored for GCSE and A-Level students. Beyond Python tutoring, I seized the opportunity to contribute to the development of a Student/Tutor portal. When a member of the development team became unavailable, I volunteered my services, and the team welcomed my involvement. My responsibilities encompassed crafting the front end of the portal for both students and teachers using React.js, HTML, and CSS. Additionally, I undertook the task of connecting the SQL database, ensuring the seamless integration of placeholder values at specific locations within the database.';
            case 'SRPR':
                return 'During university, I worked as an Account Assistant for a start-up PR company called Swipe Right PR, a leading global esports and gaming communications agency that elevates brands and helps build communities, serving clients such as NVIDIA, Red Bull, ESI, and more. My primary responsibilities included Data Management and Statistics, involving entering and updating data within the agency management system. I successfully generated balance sheets, income statements, and cash flow statements for NVIDIA, Alpine, and Team Vitality accounts using SQL and Python, as requested by my manager. Embracing the start-up culture at Swipe Right, I undertook various roles, including writing blogs and articles for clients, conducting sentiment research using Meltwater, and producing monthly reports. However, the project I found most enjoyable was the Web Development initiative. Thanks to the nature of my degree, I had the opportunity to contribute to the redesign of Swipe Right PR\'s static website. Collaborating with freelance web designers, we utilised the Node.js framework and JavaScript, enhancing both the overall appeal and functionality of the website.';
            case 'BSC-cp':
                return 'During university, I undertook various modules that significantly contributed to the development of my computational thinking, programming ability, best practices, and knowledge in the field. In my second year, I collaborated with a group to successfully build a social media platform. The web application aimed to connect like-minded individuals, allowing them to discuss, learn, and positively contribute to one or more Sustainable Development Goals established by the UN. In this project, I played a pivotal role in designing the front end (using React.js and CSS) and configuring/integrating the back-end server (MySQL, employing Node.js and the MySQL API). The result was a functional, Facebook-like social media platform with correctly operating components designed by multiple contributors. I specifically designed and developed the HomeScreen, incorporating features such as random user post rendering, comment sections per post, reactions to comments, and site navigation to other pages, including user profiles. This project provided me with a deeper understanding of frameworks, API configuration and usage, user design, user experience, software integration, and version control using GitHub. In my final year, I developed a timely crime information system, which included APIs, a Crime Map, and an AI prediction model, among other features.';
            default:
                return '';
        }
    };

    return (
        <div className='journey-container'>
            <div
                className={`A-Level-item-container ${activeItem === 'A-Level' ? 'active' : ''}`}
                // onClick={() => handleClick('A-Level')}
            >
                <div className='item-container'>
                    <div className='item-title'>
                        A-Level
                    </div>
                    <div className='item-date'>
                        2019
                    </div>
                    {/* <div className='open-mount'><AllOutIcon fontSize='small' /></div> */}
                </div>
            </div>
            <div
                className={`FunTech-item-container ${activeItem === 'FunTech' ? 'active' : ''}`}
                onClick={() => handleClick('FunTech')}
            >
                <div className='item-container'>
                    <div className='item-title'>
                        Python Tutor
                    </div>
                    <div className='item-date'>
                        2020 - 2021
                    </div>
                    <div className='open-mount'><AllOutIcon fontSize='small' /></div>
                </div>
            </div>
            <div
                className={`SRPR-item-container ${activeItem === 'SRPR' ? 'active' : ''}`}
                onClick={() => handleClick('SRPR')}
            >
                <div className='item-container'>
                    <div className='item-title'>
                        Junior Account Assistant
                    </div>
                    <div className='item-date'>
                        2021 - 2023
                    </div>
                    <div className='open-mount'><AllOutIcon fontSize='small' /></div>
                </div>
            </div>
            <div
                className={`BSC-cp-item-container ${activeItem === 'BSC-cp' ? 'active' : ''}`}
                onClick={() => handleClick('BSC-cp')}
            >
                <div className='item-container'>
                    <div className='item-title'>
                        BSc Computer Science
                    </div>
                    <div className='item-date'>
                        2020 - 2023
                    </div>
                    <div className='open-mount'><AllOutIcon fontSize='small' /></div>
                </div>
            </div>
            {showMountableDiv && (
                <div className={`mountable-div ${!showMountableDiv ? 'unmount' : ''}`}>
                    <div className='mount-title'>
                        <a>{title}</a>
                        <span>{date}</span>
                        <div className='mount-key-words'>{keywords}</div>
                        <div className='mount-content'>{description}</div>
                    </div>
                    <a className='close-button' onClick={handleUnmount}><CloseIcon fontSize='small' /></a>
                </div>
            )}
        </div>
    );
}

export default JourneySection;
