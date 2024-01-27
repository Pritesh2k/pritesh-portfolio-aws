import React, { useState } from 'react';
import '../Other Components/scrollDownButton.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function ScrollDownButton() {
    const [currentPage, setCurrentPage] = useState(0); // Start from 'about' page
    const pages = ['header', 'about', 'skills', 'portfolio', 'contact'];

    const buttonClickDown = (event) => {
        event.preventDefault();
        setCurrentPage((currentPage + 1) % pages.length);
        smoothScrollTo(pages[(currentPage + 1) % pages.length]);
    };

    const buttonClickUp = (event) => {
        event.preventDefault();
        setCurrentPage((currentPage - 1 + pages.length) % pages.length);
        smoothScrollTo(pages[(currentPage - 1 + pages.length) % pages.length]);
    };

    const smoothScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <>
            <a href={`#${pages[(currentPage + 1) % pages.length]}`} className='about-scroll-down-button-down' onClick={buttonClickDown}>
                <div className='about-down-arrow-icon-down'>
                    <KeyboardArrowDownIcon fontSize='large' />
                </div>
            </a>

            <a href={`#${pages[(currentPage - 1 + pages.length) % pages.length]}`} className='about-scroll-down-button-up' onClick={buttonClickUp}>
                <div className='about-down-arrow-icon-up'>
                    <KeyboardArrowUpIcon fontSize='large' />
                </div>
            </a>
        </>
    );
}

export default ScrollDownButton;
