import React from 'react';

function Icon(props) {
  return (
    <svg width="32" height="32">
      <use href={"/images/sprite.svg#icon-" + props.name} xlinkHref={"/images/sprite.svg#icon-" + props.name} />
    </svg>
  )
}

export default Icon;