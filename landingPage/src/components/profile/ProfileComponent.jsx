import React from 'react';
import './ProfileComponent.css';
import deep from '../../assets/deep.jpeg';

function ProfileComponent() {
  return (
    <div className='profile'>
      <div className='pic'>
        <img src={deep} alt="Deependra Shukla" />
      </div>
      <div className='intro'>
        <h1> Hello!</h1>
        <h5>I am Deependra Shukla. <br /> I'm passionate about <br />software development and technology.</h5>
        <button className='contact-btn'>Contact</button>
      </div>
    </div>
  );
}

export default ProfileComponent;
