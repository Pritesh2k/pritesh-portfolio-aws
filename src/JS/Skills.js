import React, { useState } from 'react';
import '../CSS/skills.css';

import TerminalIcon from '@mui/icons-material/Terminal';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import TerminalVideo from '../Assets/terminal.mp4';
import GraduationVideo from '../Assets/graduation.mp4';
import TrophyVideo from '../Assets/trophy.mp4';

const skillsData = [
    {
        icon: <TerminalIcon fontSize='large' />,
        video: TerminalVideo,
        categories: [
            'Python', 'JavaScript', 'Java', 'React.js',
            'C#', 'R', 'HTML & CSS', 'Node.js'
        ]
    },
    {
        icon: <SchoolIcon fontSize='large' />,
        video: GraduationVideo,
        categories: [
            'Artificial Intelligence', 'Data Analytics', 'Database Management', 'Unit Testing',
            'Cybersecurity', 'Data Structures', 'Object Orientated Programming'
        ]
    },
    {
        icon: <EmojiEventsIcon fontSize='large' />,
        video: TrophyVideo,
        categories: [
            'NPM', 'Rest APIs', 'Project Management', 'MS Office',
            'Git', 'Project Architecture, Problem Solver, Team Player'
        ]
    }
];

function Skills() {
    const [expandedCards, setExpandedCards] = useState(Array(skillsData.length).fill(false));

    const handleCardClick = (index) => {
        const newExpandedCards = [...expandedCards];
        newExpandedCards[index] = !newExpandedCards[index];
        setExpandedCards(newExpandedCards);
    };

    return (
        <>
            <div className='skills-container'>
                {skillsData.map((skill, index) => (
                    <div
                        key={index}
                        className={`skill-card ${expandedCards[index] ? 'expanded' : ''}`}
                        onClick={() => handleCardClick(index)}
                    >
                        <div className={`skill-icon skill-icon-${index + 1}`}>
                            {skill.icon}
                        </div>
                        <ul className='skill-list'>
                            {skill.categories.map((category, i) => (
                                <li key={i}>{category}</li>
                            ))}
                        </ul>
                        <video autoPlay muted loop className='video-player'>
                            <source src={skill.video} type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Skills;
