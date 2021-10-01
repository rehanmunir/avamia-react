import React, {useState} from 'react';
import "./Footer.scss"

const Footer = () => {

  return (
    <div className="footer">
      <ul className="footer-link">
        <li><span>Contact Us</span></li>
        <li><span>FAQ</span></li>
        <li><span>Terms & Conditions</span></li>
      </ul>
    </div>
  )
}

export default Footer;