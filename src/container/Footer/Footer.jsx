import React from 'react';
import { FiInstagram } from 'react-icons/fi';

import { FooterOverlay } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer app__bg section__padding'>
    {/* <FooterOverlay /> */}

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Jalan Danau Tamblingan 212</p>
        <p className='p__opensans'>+62361-286-239</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.jepun} alt="footer_logo" className='footer-logo_img'/>
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others."</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{ marginTop: 15}}/>
        <div className='app__footer-links_icons'>
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Mon - Sun:</p>
        <p className='p__opensans'>5pm - 10pm</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Jepun Sanur. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
