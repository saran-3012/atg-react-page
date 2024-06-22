import React, { useState } from 'react';
import crossEyeIcon from '../../Assets/cross_eye_icon.svg';
import eyeIcon from '../../Assets/eye_icon.svg';
import './PasswordInput.css';

const PasswordInput = () => {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisiblity = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className='password_input'>
      <input type={isPasswordVisible? "text": "password"} name="password" placeholder='Password' />
      <img src={isPasswordVisible? eyeIcon: crossEyeIcon} alt="Password" onClick={togglePasswordVisiblity}/>
    </div>
  )
}

export default PasswordInput;