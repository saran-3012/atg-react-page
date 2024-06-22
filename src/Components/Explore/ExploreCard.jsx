import React, { useState } from 'react';
import './ExploreCard.css';
import Button from '../General/Button';

const ExploreCard = ({cardIcon, hoverIcon, cardTitle, cardText, cardButton, hoverColor}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='card' style={{'--hover-color': hoverColor}} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
      <div className='card_header'>
        <img src={isHovered?hoverIcon:cardIcon} alt="Icon" />
        <h2>{cardTitle}</h2>
      </div>
      <p className='card_text'>{cardText}</p>
      <Button buttonName={cardButton} btnClass={'explore_btn'}/>
    </div>
  )
};

export default ExploreCard;