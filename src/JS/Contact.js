import React from 'react'
import '../CSS/contact.css'

function Contact() {
  return (
    <>
    <div className='contact-container'>
        <div className='contact-title'>
            Get In Touch
        </div>
        <div className='contact-message'>
            <div className='message'>
                Thank you for taking the time to go through my portfolio, If you would like to reach out for a chat click the button below!
            </div>
            <div className='email'>
            <a href="mailto:priteshparekh237@gmail.com" className="email-button">Send Email</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact