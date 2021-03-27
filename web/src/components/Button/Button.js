import React from 'react';

import classNames from 'classnames';

import './button.css';

function Button({ className, url, children }) {
  return (
    <a className={ classNames('button', { [className]: className }) } href={ url }>
      <span>{ children }</span>
    </a>
  )
}

export default Button;
