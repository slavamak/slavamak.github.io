import React from 'react';

import './header.css';

import Link from '../Link/Link';
import HeaderNav from './HeaderNav';

function Header() {
  return (
    <header className="header">
      <div className="container header__container">

        <Link class="header__logo" url="/">
          <img src="/images/logo.png" alt="SlavaMak"/>
          <span>SlavaMak</span>
        </Link>

        <HeaderNav />

        <Link class="header__email" url="mailto:hello@slavamak.dev" title="Send me a message">
          <svg width="32" height="32">
            <use href="/images/sprite.svg#icon-email" xlinkHref="/images/sprite.svg#icon-email"/>
          </svg>
        </Link>

      </div>
    </header>
  );
}

export default Header;