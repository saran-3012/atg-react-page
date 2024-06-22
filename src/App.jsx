import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Popup from './Components/Popup/Popup';
import Home from './Components/Home/Home';
import Explore from './Components/Explore/Explore';
import Hobby from './Components/Hobby/Hobby';
import Testimonials from './Components/Testimonials/Testimonials';
import GetStarted from './Components/GetStarted/GetStarted';
import Footer from './Components/Footer/Footer'

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    const bodyElement = document.querySelector('body');
    (isPopupOpen && window.innerWidth  < 640)? bodyElement.classList.add('hide-overflow'): bodyElement.classList.remove('hide-overflow'); 
  }, [isPopupOpen, window.innerWidth]);

  return (
    <>
      <Navbar isPopupOpen={isPopupOpen} togglePopup={togglePopup} />
      <Popup isPopupOpen={isPopupOpen} />
      <Home />
      <Explore />
      <Hobby />
      <Testimonials />
      <GetStarted />
      <Footer />
    </>
  );
}

export default App;
