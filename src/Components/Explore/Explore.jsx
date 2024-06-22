import React from 'react';
import '../General/Utility.css';
import './Explore.css';
import peopleIcon from '../../Assets/people_icon.svg';
import locationIcon from '../../Assets/location_icon.svg';
import basketIcon from '../../Assets/basket_icon.svg';
import calanderIcon from '../../Assets/calander_icon.svg';
import peopleIconHover from '../../Assets/people_icon_hover.svg';
import locationIconHover from '../../Assets/location_icon_hover.svg';
import basketIconHover from '../../Assets/basket_icon_hover.svg';
import calanderIconHover from '../../Assets/calander_icon_hover.svg';
import ExploreCard from './ExploreCard';

const Explore = () => {
  return (
    <section className='explore section_container'>
      <ExploreCard cardIcon={peopleIcon} hoverIcon={peopleIconHover} cardTitle={'People'} cardText={'Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.'} cardButton={'Connect'} hoverColor={'rgba(128, 100, 162, 1)'}/>
      <ExploreCard cardIcon={locationIcon} hoverIcon={locationIconHover} cardTitle={'Place'} cardText={'Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.'} cardButton={'Meet up'} hoverColor={'rgba(119, 147, 60, 1)'}/>
      <ExploreCard cardIcon={basketIcon} hoverIcon={basketIconHover} cardTitle={'Product'} cardText={'Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.'} cardButton={'Get it'} hoverColor={'rgba(192, 80, 77, 1)'}/>
      <ExploreCard cardIcon={calanderIcon} hoverIcon={calanderIconHover} cardTitle={'Program'} cardText={'Find events, meetups and workshops related to your hobby. Register or buy tickets online. ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀'} cardButton={'Attend'} hoverColor={'rgba(0, 150, 200, 1)'}/>
    </section>
  )
};

export default Explore;