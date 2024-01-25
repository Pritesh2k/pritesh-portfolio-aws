import React, { useState, useEffect } from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import '../Other Components/certificate.css'

import Certificate1 from '../../Assets/jp1.jpg'
import Certificate2 from '../../Assets/jp2.jpg'
import Certificate3 from '../../Assets/cyber.jpg'

function Certificate() {
  const aboutItems = [
    {
      id: 1,
      image: Certificate2,
    },
    {
      id: 2,
      image: Certificate1,
    },
  ];

  return (
    <>
      <div className='certificate-container'>

        <div class="certi-container">
          <div class="certi-box">
            <div class="certi-imgBx">
              <img src={Certificate1} />
            </div>
            <div class="certi-content">
              <div>
                <h2>JP Morgan 1</h2>
                <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_o8D9vEgw8vSLdmDhm_1694723470631_completion_certificate.pdf">Click To View
                </a>
              </div>
            </div>
          </div>

          <div class="certi-box">
            <div class="certi-imgBx">
              <img src={Certificate2} />
            </div>
            <div class="certi-content">
              <div>
                <h2>JP Morgan 2</h2>
                <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/Wb4yEmHvZrC2qxiyX_JPMorgan%20Chase%20&%20Co._o8D9vEgw8vSLdmDhm_1694707807617_completion_certificate.pdf">Click To View
                </a>
              </div>
            </div>
          </div>

          <div class="certi-box">
            <div class="certi-imgBx">
              <img src={Certificate3} />
            </div>
            <div class="certi-content">
              <div>
                <h2>MasterCard</h2>
                <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mastercard/vcKAB5yYAgvemepGQ_Mastercard_o8D9vEgw8vSLdmDhm_1658749592392_completion_certificate.pdf">Click To View
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Certificate;