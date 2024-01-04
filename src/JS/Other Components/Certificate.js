import React from 'react'
import '../Other Components/certificate.css'

function Certificate({image}) {

  return (
    <img className='certificate-container' src={image}/>
  )
}

export default Certificate