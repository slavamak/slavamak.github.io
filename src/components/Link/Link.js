import React from 'react';

import './link.css';

import classNames from 'classnames';

function Link({ className, url, title, children, unLink, target }) {
  return (
    <a className={ classNames({ link: !unLink }, { [className]: className }) }
       href={ url }
       title={ title }
       { ...(target === '_blank' ? { target, rel: 'noopener noreferrer' } : null) }
      >
      { children }
    </a>
  )
};

export default Link;