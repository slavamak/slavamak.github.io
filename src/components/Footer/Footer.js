import React from 'react';
import Icon from '../Icon/Icon';

import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <a className="link footer-links__item" href="digitalocean" target="_blank" rel="noopener noreferrer" title="DigitalOcean">
            <Icon name="do" width="160" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
