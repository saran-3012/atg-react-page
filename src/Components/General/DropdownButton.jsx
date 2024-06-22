import React from 'react';
import downArrowIcon from '../../Assets/downarrow_icon.svg';
import './DropdownButton.css';


const DropdownButton = ({buttonName, buttonIcon, dropdownList, activeDropdown, toggleDropdownButton}) => {
  return (
    <div className='dropdown_wrapper' onClick={() => toggleDropdownButton(buttonName)}>
      <button className='dropdown_btn' >
        <img src={buttonIcon} alt="ButtonIcon" />
        <span>{buttonName}</span>
        <img src={downArrowIcon} alt="DropdownArrow" />
      </button>
      <div className={'dropdown_options ' +(activeDropdown===buttonName?'dropdown_open':'')}>
        {
          dropdownList.map(option => (
            <div className='dropdown_option'>{option}</div>
          ))
        }
      </div>
    </div>
  )
}

export default DropdownButton;