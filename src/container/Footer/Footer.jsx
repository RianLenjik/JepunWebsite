import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer app__bg section__padding' id='footer'>
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>+62361-286-239 (Call Only)</p>
        <p className='p__opensans'>Whatsapp: +62821-4598-1122</p>
        <p className='p__opensans'>Facebook: Jepun Sanur</p>
        <p className='p__opensans' style={{ textTransform: 'none'}}>Instagram: jepunsanur</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.jepun} alt="footer_logo" className='footer-logo_img'/>
        <p className='p__opensans'>"You will find yourself knocking at the chef's door for more."</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{ marginTop: 15}}/>
        <div className='app__footer-links_icons'>
          <a href="https://www.instagram.com/jepunsanur/" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
          <a href="https://www.facebook.com/jepunsanur" target="_blank" rel="noopener noreferrer"><FiFacebook /></a>
          <a href={`https://wa.me/${+6282145981122}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Find Us</h1>
        <p className='p__opensans'>Jalan Danau Tamblingan 212, Sanur</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Jepun Sanur. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
