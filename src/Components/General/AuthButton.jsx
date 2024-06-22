import React from 'react';
import './AuthButton.css';

const AuthButton = ({buttonName, buttonIcon}) => {
  return (
    <button className='auth_button'>
        <img src={buttonIcon} alt="Icon" />
        <span>{buttonName}</span>
    </button>
  )
};

export default AuthButton;