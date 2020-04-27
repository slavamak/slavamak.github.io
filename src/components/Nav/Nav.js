import React from 'react';

import Link from '../Link/Link';

function NavItem(props) {
  return (
    <li className="header__nav-item">
      <Link url={props.url}>
        {props.children}
      </Link>
    </li>
  )
};

function Nav(props) {
  return (
    <ul className={props.class}>
      {props.children}
    </ul>
  )
};

export {Nav, NavItem};