import React, { useState } from 'react';
import './Navbar.css';
import appLogo from '../../Assets/app_logo.svg';
import searchIcon1 from '../../Assets/search_icon_1.svg';
import searchIcon2 from '../../Assets/search_icon_2.svg'
import compassIcon from '../../Assets/compass_icon.svg';
import starIcon from '../../Assets/star_icon.svg';
import bookmarkIcon from '../../Assets/bookmark_icon.svg';
import bellIcon from '../../Assets/bell_icon.svg';
import cartIcon from '../../Assets/cart_icon.svg';
import burgerIcon from '../../Assets/burger_icon.svg';
import exitIcon from '../../Assets/exit_icon.svg';
import DropdownButton from '../General/DropdownButton';
import IconButton from '../General/IconButton';
import Button from '../General/Button';


const Navbar = ({isPopupOpen, togglePopup}) => {
  const [activeDropdown, setActiveDropdown] = useState('');
  const toggleDropdownButton = (buttonName) => {
    (activeDropdown===buttonName)?setActiveDropdown(''):setActiveDropdown(buttonName);
  };
  return (
    <header className='navbar'>
      <div className='navbar__box_1'>
        <div className='app_logo'>
          <img src={appLogo} alt="AppLogo"/>
        </div>
        <div className='searchbar'>
          <input type="search" name="searchbar" className='search_input' placeholder='Search here...'/>
          <button className='search_button'>
            <img src={searchIcon1} alt="SearchIcon" />
          </button>
        </div>
      </div>
      <nav className='navbar__box_2'>
        <DropdownButton buttonName={"Explore"} buttonIcon={compassIcon} dropdownList={["People - Community", "Places - Venues", "Programs - Events", "Products - Store", "Blogs"]} activeDropdown={activeDropdown} toggleDropdownButton={toggleDropdownButton}/>
        <DropdownButton buttonName={"Hobbies"} buttonIcon={starIcon} dropdownList={["Coding", "Gaming", "Boxing", "Lifting"]} activeDropdown={activeDropdown} toggleDropdownButton={toggleDropdownButton}/>
        <IconButton buttonIcon={searchIcon2} />
        <IconButton buttonIcon={bookmarkIcon} />
        <IconButton buttonIcon={bellIcon} />
        <IconButton buttonIcon={cartIcon} />
        <button className='icon_button'><img src={isPopupOpen? exitIcon: burgerIcon} alt="BurgerIcon" onClick={togglePopup}/></button>
        <Button buttonName={"Sign In"} btnClass={"signin_desktop"}/>
      </nav>
    </header>
  )
};

export default Navbar;