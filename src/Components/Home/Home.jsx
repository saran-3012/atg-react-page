import React from 'react';
import peopleImg from '../../Assets/people_img.png'
import '../General/Utility.css';
import './Home.css';
import SiginSignup from './SiginSignup';

const Home = () => {
  return (
    <main className='home section_container'>
        <div className='home_container'>
            <h1><i>Explore your <span style={{color:"rgba(0, 150, 200, 1)"}}>hobby</span> or <span style={{color:"rgba(128, 100, 162, 1)"}}>passion</span></i></h1>
            <article className='home_text_wrapper'>
              <p className='home_text'>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform.<span> Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</span></p>
              <p className='home_text'>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.</p>
            </article>
            <img className='home_people_pc' src={peopleImg} alt="People" />
        </div>
        <SiginSignup />
        <img className='home_people_mobile' src={peopleImg} alt="People" />
    </main>
  )
};

export default Home;