import { React, useState } from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
    <div className='app__header app__bg app__wrapper section__padding' id='home' >
    <div className='app__wrapper_info'>
      <SubHeading title="Oldie but Goldie" />
      <h1 className='app__header-h1'>The Heart of Sanur</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>
        Big smiles for checking us out! You're looking at the tastiest spot in town, not our words. 
        Our menu's got a little bit of tradition, a dash of modernness, and a whole lot of yum.
        So, settle in, explore the menu, and let's share a good time and great food.
      </p>
      <button type='button' className='custom__button'>
        <a href="https://drive.google.com/file/d/1exgNatHHQdkROLQSIGpIweSpsG67YRlI/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
          Explore Menu
        </a>
      </button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.steak} alt="header img" />
    </div>
  </div>  
);

export default Header;
