import React from 'react';

import './link.css';

import classNames from 'classnames';

function Link({ className, url, title, children, unLink, target = '_self' }) {
  return (
    <a className={ classNames({ link: !unLink }, { [className]: className }) } href={ url } title={ title } target={ target }>
      { children }
    </a>
  )
};

export default Link;