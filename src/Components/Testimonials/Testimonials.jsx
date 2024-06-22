import React from 'react';
import '../General/Utility.css';
import './Testimonials.css';
import quoteIcon from '../../Assets/quote_icon.svg';
import musicAudio from '../../Assets/music_audio.mp3';
import dancerIcon from '../../Assets/dancer_icon.svg';


const Testimonials = () => {
  return (
    <section className='testimonials section_container'>
      <div className='testimonials_wrapper'>
        <div className='testimonials_header'>
          <img src={quoteIcon} alt="Add" />
          <h2>Testimonials</h2>
        </div>
        <article>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</article>
        <div className='testimonials_box'>
            <div className='audio_box'>
              <audio controls src={musicAudio} type="audio/mpeg"></audio>
              <img src={dancerIcon} alt="Profile Icon" />
            </div>
            <div className='testimonials_inner_box_1'>
                <img src={dancerIcon} alt="Profile Icon" />
                <div className='testimonials_inner_box_2'>
                    <span>Shubha Nagarajan</span>
                    <p>Classical Dancer</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;