import React, { useEffect, useState } from 'react';
import '../CSS/contact.css'

//import videodb
import { videoDB } from '../config';
import { getDownloadURL, listAll, ref } from 'firebase/storage';

function Contact() {
    //for fetch videos firebase
    const [videoURL, setVideoURL] = useState([]);
    const [videoURLs, setVideoURLs] = useState({}); // Add this line

    //for fetch videos firebase
    useEffect(() => {
        //videoDB, "Videos" --> (var) is to store the data from the storage | ("Videos") is storage location
        listAll(ref(videoDB, "ContactPage")).then(vids => {
            vids.items.forEach(val => {
                getDownloadURL(val).then(url => {
                    setVideoURL(data => [...data, url])
                })
            })
        })
    }, [])

    useEffect(() => {
        listAll(ref(videoDB, "ContactPage")).then(vids => {
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
            <div className='contact-container'>
                <div className='contact-title'>
                    Get In Touch
                </div>
                <div className='contact-message'>
                    <div className='message'>
                        <p>Thank you for visiting my portfolio<span>!</span> <br/> Up for a chat<span>,</span> Click below <span>⬇</span></p>
                    </div>
                    <div className='email'>
                        {
                            videoURLs["contact.mp4"] && (
                                    <video autoPlay muted loop className='email-video-image'>
                                        <source src={videoURLs["contact.mp4"]} type='video/mp4' />
                                        Your browser does not support the video tag.
                                    </video>
                                )
                        }
                        {/* <img className='email-video-image' src='' alt='video' /> */}
                        <a href="mailto:priteshparekh237@gmail.com" className="email-button">Send Email</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact