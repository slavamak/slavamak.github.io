import React from 'react';

import Link from '../Link/Link';

function NavItem({ url, children }) {
  return (
    <li className="header__nav-item">
      <Link url={url}>
        {children}
      </Link>
    </li>
  )
};

function Nav({ className, children }) {
  return (
    <ul className={className}>
      {children}
    </ul>
  )
};

export {Nav, NavItem};