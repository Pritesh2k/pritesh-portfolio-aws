import React from 'react';
import '../CSS/skills.css';

import TerminalIcon from '@mui/icons-material/Terminal';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function Skills() {
    return (
        <div className="container">
            <div>
                <div className="content">
                    <div className='icon-1'>
                        <TerminalIcon fontSize='large' />
                    </div>
                    <div className='content-context'>
                        <ul>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>Java</li>
                            <li>React.js</li>
                        </ul>

                        <ul>
                            <li>C#</li>
                            <li>R</li>
                            <li>HTML & CSS</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className="content">
                    <div className='icon-2'>
                        <SchoolIcon fontSize='large' />
                    </div>
                    <div className='content-context'>
                        <ul>
                            <li>Artificial Intelligence</li>
                            <li>Data Analytics</li>
                            <li>Database Management</li>
                            <li>Unit Testing</li>
                        </ul>

                        <ul>
                            <li>Cybersecurity</li>
                            <li>Data Structures</li>
                            <li>Object Orientated Programming</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className="content">
                    <div className='icon-3'>
                        <EmojiEventsIcon fontSize='large' />
                    </div>
                    <div className='content-context'>
                        <ul>
                            <li>NPM</li>
                            <li>Rest APIs</li>
                            <li>Project Management</li>
                            <li>MS Office</li>
                        </ul>

                        <ul>
                            <li>Git</li>
                            <li>Project Architecture</li>
                            <li>Problem Solver</li>
                            <li>Team Player</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
