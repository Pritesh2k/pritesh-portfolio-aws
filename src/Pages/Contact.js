import React from 'react'
import '../CSS/contact.css'

function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact-subheader'>
        <div className='contact-title'>Contact</div>
        <div className='contact-line' />
      </div>
      <div className='contact-header'>
        <div className='contact-title top'>Get In Touch</div>
        <a className='contact-email' href="mailto:recipient@example.com">Email</a>
        <a className='contact-email' href="https://github.com/Pritesh2k">Github</a>
        <a className='contact-email' href="https://www.linkedin.com/in/pritesh-parekh2000/">LinkedIn</a>
      </div>
    </div>
  )
}

export default Contact