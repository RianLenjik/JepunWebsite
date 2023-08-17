import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    {/* <div className='app__aboutus-overlay flex__center'>
      <img src={images.jepunflower} alt="g letter" />
    </div> */}

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className='p__opensans'>
          We're your ultimate hangout spot right in the heart of Sanur's bustling tourist 
          scene. Whether you're in the mood for some Indonesian soul food or craving the 
          comfort of Western bites, we've got your taste buds covered. Grab a seat in our 
          chill indoor space or soak up the vibes of the outdoors – the choice is yours. Oh, and 
          did we mention our friendly feline pals? They're part of the family too. Join us for 
          a feast that's not just about food, but good times and great company
        </p>
      </div>

      <div className='app__aboutus-content_flower flex__center'>
        <img src={images.jepunflower} alt="about_flower" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className='p__opensans'>
        Since 1993, Jepun has been serving up smiles and flavors on Sanur's bustling tourist 
        strip. Starting as 'Cafe Jepun,' we've grown as a family-owned gem that 
        blends Indonesian and Western cuisine with a dash of heartwarming vibes. With a history 
        rooted in love and a name synonymous with tradition, we're here to make every visit a 
        memory to savor. Join us and be part of the Jepun story!
        <p></p>
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
