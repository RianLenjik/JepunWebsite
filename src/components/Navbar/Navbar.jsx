import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.jepun} alt="app logo"/>
      </div>
      <ul className='app__navbar-links' style={ { paddingLeft: '0'}}>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="https://drive.google.com/file/d/1exgNatHHQdkROLQSIGpIweSpsG67YRlI/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Menu</a></li>
        <li className='p__opensans'><a href="#footer">Contact</a></li>
      </ul>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>
        
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}/>
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href="#home">Home</a></li>
              <li className='p__opensans'><a href="#about">About</a></li>
              <li className='p__opensans'><a href="#about">Menu</a></li>
              <li className='p__opensans'><a href="#about">Contact</a></li>
            </ul>
          </div>
        )}
        
        
        
      </div>
    </nav>
  )
}

export default Navbar;
