import React from 'react';

function ExternalRedirect({to, name}) {
  window.location = to;

  return (
    <span>Redirect to {name}...</span>
  )
};

export default ExternalRedirect;