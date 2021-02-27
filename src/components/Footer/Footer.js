import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../Icon/Icon';

import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <Link className="footer-links__item" to="digitalocean" target="_blank" title="DigitalOcean">
            <Icon name="do" width="160" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
