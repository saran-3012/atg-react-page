import React from 'react';
import './Button.css';

const Button = ({buttonName, btnClass}) => {
  return (
    <button className={'btn '+ (btnClass? btnClass:'')} >{buttonName}</button>
  )
};

export default Button;