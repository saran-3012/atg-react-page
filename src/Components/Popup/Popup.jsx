import React from 'react';
import '../General/Utility.css';
import './Popup.css';
import SiginSignup from '../Home/SiginSignup';

const Popup = ({isPopupOpen}) => {
  return (
    <div className={'popup section_container ' + (isPopupOpen?'open':'')}>
        <SiginSignup />
    </div>
  )
}

export default Popup