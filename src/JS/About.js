import React from 'react'
import '../CSS/about.css'

import GitHubIcon from '@mui/icons-material/GitHub';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import aboutBG from '../Assets/aboutBG.jpg'

function About() {
    return (
        <>
            <div className='about-containerr-wrapper'>
                <img className='about-background-image' src={aboutBG} />
                <div className='above-img-container'>
                    <div className='about-leftside-container'>
                        <div className='left-side-title'>
                            <p>Hi, I'm <br/>Pritesh Parekh<span>.</span></p>
                        </div>
                        <div className='left-side-links'>
                            <a href='https://github.com/Pritesh2k'><GitHubIcon fontSize='large' /></a>
                        </div>
                        <div className='left-side-content'>
                            Content
                        </div>
                    </div>
                    <div className='about-rightside-container'>
                        <div className='empty'/>
                        <div className='right-about-container'>
                            <div className='number'>
                                <div className='number-value'>1</div>
                                <div className='line'/>
                            </div>
                            <a className='right-title'>About Me</a>
                        </div>

                        <div className='left-about-container'>
                            <a className='left-title'>Education</a>
                            <div className='left-number'>
                            <div className='left-line'/>
                                <div className='left-number-value'>2</div>
                            </div>
                        </div>

                        <div className='right-about-container'>
                            <div className='number'>
                                <div className='number-value'>3</div>
                                <div className='line'/>
                            </div>
                            <a className='right-title'>Capgemini Work Experience</a>
                        </div>

                        <div className='left-about-container'>
                            <a className='left-title'>Cancer Research Volunteer</a>
                            <div className='left-number'>
                            <div className='left-line'/>
                                <div className='left-number-value'>4</div>
                            </div>
                        </div>

                        <div className='right-about-container'>
                            <div className='number'>
                                <div className='number-value'>5</div>
                                <div className='line'/>
                            </div>
                            <a className='right-title'>Wembley Stadium Steward</a>
                        </div>
                        
                        <div className='left-about-container'>
                            <a className='left-title'>Python Tutor @ FunTech</a>
                            <div className='left-number'>
                            <div className='left-line'/>
                                <div className='left-number-value'>6</div>
                            </div>
                        </div>
                        
                        <div className='right-about-container'>
                            <div className='number'>
                                <div className='number-value'>7</div>
                                <div className='line'/>
                            </div>
                            <a className='right-title'>Account Assistant @ Swipe Right</a>
                        </div>

                        <div className='left-about-container'>
                            <a className='left-title'>Head Barista @ Coffee & Deli</a>
                            <div className='left-number'>
                            <div className='left-line'/>
                                <div className='left-number-value'>8</div>
                            </div>
                        </div>
                        <div className='empty'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
