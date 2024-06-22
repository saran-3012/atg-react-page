import React from 'react';
import uparrowIcon from '../../Assets/uparrow_icon.svg';
import uparrowIconClick from '../../Assets/uparrow_icon_click.svg';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo(0,0);
  }
  return (
    <button className='scrolltotop' style={{'--default-img':`url(${uparrowIcon})`, '--click-img':`url(${uparrowIconClick})`}}  onClick={scrollToTop} />
  )
}

export default ScrollToTop