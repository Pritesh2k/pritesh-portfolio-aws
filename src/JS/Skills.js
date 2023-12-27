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
                    <div className='icon'>
                        <TerminalIcon fontSize='large' />
                    </div>
                    <div className='content-context'>
                        <ul>
                            <li>SQL</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className="content">
                    <SchoolIcon fontSize='large' />
                </div>
            </div>
            <div>
                <div className="content">
                    <EmojiEventsIcon fontSize='large' />
                </div>
            </div>
        </div>
    );
}

export default Skills;
