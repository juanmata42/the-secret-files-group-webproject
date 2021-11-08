import React, { useState } from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  const logo = 'https://imgur.com/B7wME9O.png';
  //qwerty testear link y si se renderizan los logos, por ejemplo
  return (
    <>
      <footer className="footer">
        <div className="container-logo">
          <Link to="/about">
            <img src={logo} alt="Secret Hero" className="logo-footer" />
          </Link>
        </div>
        <div className="container-copyright-rrss">
          <div className="rrss">
            <span className="copyright"> @2021 UDT</span>
            <FontAwesomeIcon
              icon={faInstagram}
              inverse
              className="rrss__icon"
            />
            <FontAwesomeIcon icon={faTwitter} inverse className="rrss__icon" />
            <FontAwesomeIcon icon={faYoutube} inverse className="rrss__icon" />
          </div>
        </div>
      </footer>
    </>
  );
}
