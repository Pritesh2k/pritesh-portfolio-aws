import React, { useEffect, useState } from 'react';
import '../CSS/skills.css';

import TerminalIcon from '@mui/icons-material/Terminal';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

//import videodb
import { videoDB } from '../config';
import { getDownloadURL, listAll, ref } from 'firebase/storage';

// I want to fetch the AWS Component here
const skillsData = [
    {
        icon: <TerminalIcon fontSize='medium' />,
        categories: [
            'Python', 'JavaScript', 'Java', 'React.js',
            'C#', 'R', 'HTML & CSS', 'Node.js', 'Git, Git CLI', 'Rest APIs - Configuration and Usage', 'Wire Shark Packet Monitoring'
        ]
    },
    {
        icon: <SchoolIcon fontSize='medium' />,
        categories: [
            'Software Engineering', 'Object Orientated Programming', 'Software Architecture', 'Development Cycles and Methodologies (Agile)', 'Data Analytics (Pandas)', 'Database Management (3NF Normalisation)', 'Data Structures', 'Unit Testing', 'Artificial Intelligence', 'Supervised & Unsupervised (K-Means, Classification and Neural Networks)', 'Cybersecurity - Threat Analysis, Risk Factors and Mitigation',
        ]
    },
    {
        icon: <EmojiEventsIcon fontSize='medium' />,
        categories: [
            'Project Management', 'Project Architecture', 'Computational Thinker', 'Problem Solver', 'MS Office', 'Team Player'
        ]
    }
];

function Skills() {
    //for fetch videos firebase
    const [videoURL, setVideoURL] = useState([]);
    const [videoURLs, setVideoURLs] = useState({}); // Add this line

    const [expandedCards, setExpandedCards] = useState(Array(skillsData.length).fill(false));

    const handleCardClick = (index) => {
        const newExpandedCards = [...expandedCards];
        newExpandedCards[index] = !newExpandedCards[index];
        setExpandedCards(newExpandedCards);
    };

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

                        {/* for fetch videos firebase. */}
                        {
                            videoURLs["terminal.mp4"] && (
                                index === 0 && (
                                    <video key={index} autoPlay muted loop className='video-player'>
                                        <source src={videoURLs["terminal.mp4"]} type='video/mp4' />
                                        Your browser does not support the video tag.
                                    </video>
                                )
                            )
                        }

                        {
                            videoURLs["graduation.mp4"] && (
                                index === 1 && (
                                    <video key={index} autoPlay muted loop className='video-player'>
                                        <source src={videoURLs["graduation.mp4"]} type='video/mp4' />
                                        Your browser does not support the video tag.
                                    </video>
                                )
                            )
                        }

                        {
                            videoURLs["trophy.mp4"] && (
                                index === 2 && (
                                    <video key={index} autoPlay muted loop className='video-player'>
                                        <source src={videoURLs["trophy.mp4"]} type='video/mp4' />
                                        Your browser does not support the video tag.
                                    </video>
                                )
                            )
                        }

                    </div>
                ))}
            </div>
        </>
    );
}

export default Skills;
