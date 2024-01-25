import React, { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import '../CSS/skills.css';

import TerminalIcon from '@mui/icons-material/Terminal';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';

//import videodb
import { videoDB } from '../config';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import Certificate from './Other Components/Certificate';

const skillsData = [
    {
        id: 1,
        Title: 'Technical',
        icon: <TerminalIcon fontSize='medium' />,
        categories: [
            'Python | R', 'Java | JavaScript | C#', 'React.js | Node.js', 'HTML5 | CSS', 'Command Line | Git | Git CLI', 'Rest APIs (Configuration and Usage)', 'Wire Shark Packet Monitoring'
        ]
    },
    {
        id: 2,
        Title: 'Academic',
        icon: <SchoolIcon fontSize='medium' />,
        categories: [
            'Software Development', 'Software Management', 'Artificial Intelligence - Supervised & Unsupervised (K-Means, Classification and Neural Networks)', 'Cybersecurity - Vulnerability Detection, Threat Analysis, Risk Factors and Mitigation', 'Object Orientated Programming', 'Data Structures', 'Unit Testing', 'Software and Project Architecture', 'Development Cycles and Methodologies (Agile)', 'Data Analytics (Pandas)', 'Database Management (3NF Normalisation)',
        ]
    },
    {
        id: 3,
        Title: 'Work Place',
        icon: <WorkIcon fontSize='medium' />,
        categories: [
            'Collaboration - Software Implementation', 'Project Management Tools', 'Task Management', 'Computational Thinker', 'Analytical Skills', 'Problem Solver', 'Communication Skills', 'MS Office', 'Team Player'
        ]
    },
    {
        id: 4,
        Title: 'Certificates',
        icon: <EmojiEventsIcon fontSize='medium' />,
        categories: [
            <Certificate />
        ]
    }
];

const predefinedStyle = {
    fontSize: '16px', // Your default font size
    color: '#333', // Your default color

};

function getRandomStyle() {
    const fontSize = Math.floor(Math.random() * 8) + 11; // Random font size between 10 and 30
    const color = getRandomDarkerColor(); // Function to get a random color
    const fontWeight = Math.random() < 0.5 ? 'normal' : 'bold'; // Randomly set font weight to normal or bold
    return { fontSize: `${fontSize}px`, color, fontWeight };
}

function getRandomDarkerColor() {
    const darkColors = ['#787878', '#646464', '#505050', '#3c3c3c', '#282828', '#141414', '#000000', '#0d0d0d', '#1a1a1a']; // Add more darker colors if needed
    return darkColors[Math.floor(Math.random() * darkColors.length)];
}

function Skills() {
    //for fetch videos firebase
    const [videoURL, setVideoURL] = useState([]);
    const [videoURLs, setVideoURLs] = useState({}); // Add this line

    //const [expandedCards, setExpandedCards] = useState(Array(skillsData.length).fill(false));

    const [currentDescription, setCurrentDescription] = useState('');
    const [currentTitle, setCurrentTitle] = useState('');
    function handleHeaderChange(index) {
        setCurrentDescription(skillsData[index].categories);
        setCurrentTitle(skillsData[index].Title)
    }

    //for fetch videos firebase
    useEffect(() => {
        //videoDB, "Videos" --> (var) is to store the data from the storage | ("Videos") is storage location
        listAll(ref(videoDB, "Videos")).then(vids => {
            vids.items.forEach(val => {
                getDownloadURL(val).then(url => {
                    setVideoURL(data => [...data, url])
                })
            })
        })
    }, [])

    useEffect(() => {
        listAll(ref(videoDB, "Videos")).then(vids => {
            const videoURLs = {};

            vids.items.forEach(val => {
                getDownloadURL(val).then(url => {
                    const videoName = val.name;
                    videoURLs[videoName] = url;

                    setVideoURL(data => [...data, url]);
                });
            });

            // Update the state with the specific video URLs for each skill card
            setVideoURLs(videoURLs);
        });
    }, []);


    return (
        <>
            <div className='skills-container-wrapper'>
                <div className='left-skill-section'>
                    {skillsData.map((item, index) => (
                        <>
                            <div key={index} className='skill-header'>
                                <div className='skill-header-left'>
                                    <div className='skills-icon'>
                                        <div className='icon'>
                                            {item.icon}
                                        </div>
                                    </div>
                                    {
                                        videoURLs["terminal.mp4"] && (
                                            index === 0 && (
                                                <video autoPlay muted loop className='video-player'>
                                                    <source src={videoURLs["terminal.mp4"]} type='video/mp4' />
                                                    Your browser does not support the video tag.
                                                </video>
                                            )
                                        )
                                    }

                                    {
                                        videoURLs["graduation.mp4"] && (
                                            index === 1 && (
                                                <video autoPlay muted loop className='video-player'>
                                                    <source src={videoURLs["graduation.mp4"]} type='video/mp4' />
                                                    Your browser does not support the video tag.
                                                </video>
                                            )
                                        )
                                    }

                                    {
                                        videoURLs["corporate.mp4"] && (
                                            index === 2 && (
                                                <video autoPlay muted loop className='video-player'>
                                                    <source src={videoURLs["corporate.mp4"]} type='video/mp4' />
                                                    Your browser does not support the video tag.
                                                </video>
                                            )
                                        )
                                    }

                                    {
                                        videoURLs["trophy.mp4"] && (
                                            index === 3 && (
                                                <video autoPlay muted loop className='video-player'>
                                                    <source src={videoURLs["trophy.mp4"]} type='video/mp4' />
                                                    Your browser does not support the video tag.
                                                </video>
                                            )
                                        )
                                    }
                                </div>
                                <div className='skill-header-right'>
                                    <div className='title'>
                                        {item.Title}
                                    </div>
                                    <div className='content'>
                                        {item.categories.map((category, index) => (
                                            <span key={index} style={index === 1 ? getRandomStyle() : index === 2 || index === 3 ? predefinedStyle : null}>
                                                <div className='skil-border'>
                                                    {category}
                                                </div>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Skills;
