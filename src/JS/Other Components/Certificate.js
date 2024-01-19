import React from 'react';

const Certificate = ({ imageUrl }) => {
  return (
    <div className='certificate'>
      <img src={imageUrl} alt='Certificate' />
    </div>
  );
};

export default Certificate;