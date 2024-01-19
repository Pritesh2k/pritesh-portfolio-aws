import React, { useEffect, useState } from 'react';
import WordCloud from 'react-wordcloud';
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

import certificate1 from '../Assets/jp1.jpg';
import certificate2 from '../Assets/jp2.jpg';
import certificate3 from '../Assets/cyber.jpg';

const skillsData = [
    {
        id: 1,
        Title: 'Technical',
        icon: <TerminalIcon fontSize='large' />,
        categories: [
            'Python | R', 'Java | JavaScript | C#', 'React.js | Node.js', 'HTML5 | CSS', 'Command Line | Git | Git CLI', 'Rest APIs (Configuration and Usage)', 'Wire Shark Packet Monitoring'
        ]
    },
    {
        id: 2,
        Title: 'Academic',
        icon: <SchoolIcon fontSize='large' />,
        categories: [
            'Software Development', 'Software Management', 'Artificial Intelligence - Supervised & Unsupervised (K-Means, Classification and Neural Networks)', 'Cybersecurity - Vulnerability Detection, Threat Analysis, Risk Factors and Mitigation', 'Object Orientated Programming', 'Data Structures', 'Unit Testing', 'Software and Project Architecture', 'Development Cycles and Methodologies (Agile)', 'Data Analytics (Pandas)', 'Database Management (3NF Normalisation)',
        ]
    },
    {
        id: 3,
        Title: 'Work Place',
        icon: <WorkIcon fontSize='large' />,
        categories: [
            'Collaboration - Software Implementation', 'Project Management Tools', 'Task Management', 'Computational Thinker', 'Analytical Skills', 'Problem Solver', 'Communication Skills', 'MS Office', 'Team Player'
        ]
    },
    {
        id: 4,
        Title: 'Certificates',
        icon: <EmojiEventsIcon fontSize='large' />,
        categories: [
            certificate1, certificate2, certificate3
        ]
    }
];

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
                            <div key={index} className='skill-header' onClick={() => handleHeaderChange(index)}>
                                <div className='skills-icon'>
                                    {item.icon}
                                </div>
                                <div className='skills-video'>
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
                            </div>
                        </>
                    ))}
                </div>
                <div className='right-skill-section'>
                    <div className='skill-section-content'>
                        <div className="title">
                            {currentTitle}
                        </div>
                        <div className="content">
                            {currentDescription[0]}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;
