import React from 'react';

import './header.css';

import Link from '../Link/Link';
import HeaderNav from './HeaderNav';
import Icon from '../Icon/Icon';

function Header() {
  return (
    <header className="header">
      <div className="container header__container">

        <Link className="header__logo" url="/">
          <img src="/images/logo.png" alt="Slava Maksimov"/>
          <span>SlavaMak</span>
        </Link>

        <HeaderNav />

        <Link className="header__email" url="mailto:slavamak.dev@gmail.com" title="Send me a message">
          <Icon name="email" />
        </Link>

      </div>
    </header>
  );
}

export default Header;