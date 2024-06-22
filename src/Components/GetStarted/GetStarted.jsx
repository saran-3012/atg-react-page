import React from 'react';
import '../General/Utility.css';
import './GetStarted.css';
import getstartedImg from '../../Assets/getstarted_img.png';
import Button from '../General/Button'
import ScrollToTop from '../General/ScrollToTop';

const GetStarted = () => {
  return (
    <section className='getstarted section_container'>
      <h1><i>Your <span style={{color:'rgba(128, 100, 162, 1)'}}>Hobby</span>, Your <span style={{color:'rgba(0, 150, 200, 1)'}}>Community...</span></i></h1>
      <Button buttonName={'Get started'} btnClass={'getstarted_btn'}/>
      <img src={getstartedImg} alt="Get Started" />
      <ScrollToTop />
    </section>
  )
}

export default GetStarted;