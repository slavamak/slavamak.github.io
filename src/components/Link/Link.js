import React from 'react';

import './link.css'

function Link(props) {
  return (
    <a className={props.class ? props.class + " link" : "link"} href={props.url} title={props.title}>
      {props.children}
    </a>
  )
};

export default Link;