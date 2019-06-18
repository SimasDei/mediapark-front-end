import React from 'react';
import { ReactComponent as Facebook } from '../../scss/icons/facebook.svg';
import { ReactComponent as Instagram } from '../../scss/icons/instagram.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__field">
          <h3 className="footer__field-title">Apie statytoją</h3>
          <a href="#!" className="footer__field-link">
            Lorem ipsum
          </a>
          <a href="#!" className="footer__field-link">
            Dolor sit amet
          </a>
        </div>
        <div className="footer__field">
          <h3 className="footer__field-title">Saugumas</h3>
          <a href="#!" className="footer__field-link">
            Consectetur adipiscing
          </a>
          <a href="#!" className="footer__field-link">
            Sed do eiusmod
          </a>
        </div>
        <div className="footer__field footer__field--social">
          <Facebook />
          <Instagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
