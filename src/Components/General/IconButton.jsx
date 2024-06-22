import React from 'react';
import './IconButton.css';

const IconButton = ({buttonIcon}) => {
  return (
    <button className='icon_button'>
        <img src={buttonIcon} alt="ButtonIcon" />
    </button>
  )
};

export default IconButton;