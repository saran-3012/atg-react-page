import React from 'react';
import addIcon from '../../Assets/add_icon.svg';
import '../General/Utility.css';
import './Hobby.css';
import Button from '../General/Button';

const Hobby = () => {
  return (
    <section className='hobby section_container'>
        <div className='hobby_wrapper'>
            <div className='hobby_inner_box'>
                <img src={addIcon} alt="Add" />
                <h2>Add your own</h2>
            </div>
            <p>Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page</p>
            <Button buttonName={'Add new'}/>
        </div>
    </section>
  )
};

export default Hobby;