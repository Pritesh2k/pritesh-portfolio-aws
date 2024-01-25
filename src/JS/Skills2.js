import React, { useEffect, useState } from 'react';
import '../CSS/skills2.css'

import TerminalIcon from '@mui/icons-material/Terminal';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';
import Certificate from './Other Components/Certificate';

//import videodb
import { videoDB } from '../config';
import { getDownloadURL, listAll, ref } from 'firebase/storage';

function getRandomStyle() {
    const fontSize = Math.floor(Math.random() * 0.8) + 1.325; // Random font size between 10 and 30
    const color = getRandomDarkerColor(); // Function to get a random color
    const fontWeight = Math.random() < 0.5 ? 'normal' : 'bold'; // Randomly set font weight to normal or bold
    return { fontSize: `${fontSize}rem`, color, fontWeight };
}

function mobileRandomStyle() {
    const fontSize = Math.floor(Math.random() * 0.4) + 0.8; // Random font size between 10 and 30
    const color = getRandomDarkerColor(); // Function to get a random color
    const fontWeight = Math.random() < 0.5 ? 'normal' : 'bold'; // Randomly set font weight to normal or bold
    return { fontSize: `${fontSize}rem`, color, fontWeight };
}

function mobileRandomStyle_adjusted() {
    const fontSize = Math.floor(Math.random() * 0.4) + 0.5; // Random font size between 10 and 30
    const color = getRandomDarkerColor(); // Function to get a random color
    const fontWeight = Math.random() < 0.5 ? 'normal' : 'bold'; // Randomly set font weight to normal or bold
    return { fontSize: `${fontSize}rem`, color, fontWeight };
}

function mobileRandomStyle_adjusted2() {
    const fontSize = Math.floor(Math.random() * 0.4) + 0.7; // Random font size between 10 and 30
    const color = getRandomDarkerColor(); // Function to get a random color
    const fontWeight = Math.random() < 0.5 ? 'normal' : 'bold'; // Randomly set font weight to normal or bold
    return { fontSize: `${fontSize}rem`, color, fontWeight };
}

function getRandomDarkerColor() {
    const darkColors = ['#787878', '#646464', '#505050', '#3c3c3c', '#282828', '#141414', '#000000', '#0d0d0d', '#1a1a1a']; // Add more darker colors if needed
    return darkColors[Math.floor(Math.random() * darkColors.length)];
}

function activateSkillContent(skillType) {
    alert(`clicked: ${skillType}`)
}

function Skills2() {
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

    const [videoURL, setVideoURL] = useState([]);
    const [videoURLs, setVideoURLs] = useState({}); // Add this line

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

    useEffect(() => {
        // Add an event listener to the button
        const button = document.getElementById('skillButton');

        if (button) {
            button.addEventListener('click', () => {
                activateSkillContent('Test');
            });
        }

        // Remove the event listener when the component unmounts
        return () => {
            if (button) {
                button.removeEventListener('click', () => {
                    activateSkillContent('Test');
                });
            }
        };
    }, []); // Empty dependency array to run the effect only once on mount

    return (
        <>
            <div className='skills2-container'>
                <div className='skills2-skill-card'>
                    <div className='mobile-overlay'>
                        <div className='skilss2-title-content'>
                            {skillsData[0].Title}
                            <div className='skills2-line' />
                        </div>
                        <div className='skill2-content'>
                            {skillsData.map((item, index) => (
                                index === 0 && (
                                    <div className='keyword-background'>{item.categories.map((keyword) => (
                                        <div style={mobileRandomStyle()}>{keyword}</div>
                                    ))}</div>
                                )
                            ))}
                        </div>
                    </div>
                    <div className='skill2-cover'>
                        {
                            videoURLs["terminal.mp4"] && (
                                <video autoPlay muted loop className='video-player'>
                                    <source src={videoURLs["terminal.mp4"]} type='video/mp4' />
                                    Your browser does not support the video tag.
                                </video>
                            )
                        }
                    </div>
                    <div className='skills2-title'>
                        <div className='skilss2-title-content'>
                            {skillsData[0].Title}
                            <div className='skills2-line' />
                            {skillsData[0].icon}
                        </div>
                    </div>
                    <div className='skill2-content'>
                        {skillsData.map((item, index) => (
                            index === 0 && (
                                <div className='keyword-background'>{item.categories.map((keyword) => (
                                    <div style={getRandomStyle()}>{keyword}</div>
                                ))}</div>
                            )
                        ))}
                    </div>
                </div>

                <div className='skills2-skill-card'>
                    <div className='mobile-overlay'>
                        <div className='skilss2-title-content'>
                            {skillsData[1].Title}
                            <div className='skills2-line' />
                        </div>
                        <div className='skill2-content'>
                            {skillsData.map((item, index) => (
                                index === 1 && (
                                    <div className='keyword-background'>{item.categories.map((keyword) => (
                                        <div style={mobileRandomStyle_adjusted()}>{keyword}</div>
                                    ))}</div>
                                )
                            ))}
                        </div>
                    </div>

                    <div className='skill2-cover'>
                        {
                            videoURLs["graduation.mp4"] && (
                                <video autoPlay muted loop className='video-player'>
                                    <source src={videoURLs["graduation.mp4"]} type='video/mp4' />
                                    Your browser does not support the video tag.
                                </video>
                            )
                        }
                    </div>
                    <div className='skills2-title'>
                        <div className='skilss2-title-content'>
                            {skillsData[1].Title}
                            <div className='skills2-line' />
                            {skillsData[1].icon}
                        </div>
                    </div>
                    <div className='skill2-content'>
                        {skillsData.map((item, index) => (
                            index === 1 && (
                                <div className='keyword-background'>{item.categories.map((keyword) => (
                                    <div style={getRandomStyle()}>{keyword}</div>
                                ))}</div>
                            )
                        ))}
                    </div>
                </div>

                <div className='skills2-skill-card'>
                    <div className='mobile-overlay'>
                        <div className='skilss2-title-content'>
                            {skillsData[2].Title}
                            <div className='skills2-line' />
                        </div>
                        <div className='skill2-content'>
                            {skillsData.map((item, index) => (
                                index === 2 && (
                                    <div className='keyword-background'>{item.categories.map((keyword) => (
                                        <div style={mobileRandomStyle_adjusted2()}>{keyword}</div>
                                    ))}</div>
                                )
                            ))}
                        </div>
                    </div>

                    <div className='skill2-cover'>
                        {
                            videoURLs["corporate.mp4"] && (
                                <video autoPlay muted loop className='video-player'>
                                    <source src={videoURLs["corporate.mp4"]} type='video/mp4' />
                                    Your browser does not support the video tag.
                                </video>
                            )
                        }
                    </div>
                    <div className='skills2-title'>
                        <div className='skilss2-title-content'>
                            {skillsData[2].Title}
                            <div className='skills2-line' />
                            {skillsData[2].icon}
                        </div>
                    </div>
                    <div className='skill2-content'>
                        {skillsData.map((item, index) => (
                            index === 2 && (
                                <div className='keyword-background'>{item.categories.map((keyword) => (
                                    <div style={getRandomStyle()}>{keyword}</div>
                                ))}</div>
                            )
                        ))}
                    </div>
                </div>

                <div className='skills2-skill-card'>

                    <div className='skill2-cover'>
                        {
                            videoURLs["trophy.mp4"] && (
                                <video autoPlay muted loop className='video-player'>
                                    <source src={videoURLs["trophy.mp4"]} type='video/mp4' />
                                    Your browser does not support the video tag.
                                </video>
                            )
                        }
                    </div>
                    <div className='skills2-title'>
                        <div className='skilss2-title-content'>
                            {skillsData[3].Title}
                            <div className='skills2-line' />
                            {skillsData[3].icon}
                        </div>
                    </div>
                    <div className='skill2-content certi'>
                        <div className='keyword-background'>
                            {skillsData[3].categories}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills2