import React from 'react';

import Link from '../Link/Link';
import Icon from '../Icon/Icon';

const links = {
  upwork: {
    url: 'https://www.upwork.com/freelancers/~019df0d142b971dff7',
    title: 'My page on Upwork'
  },
  github: {
    url: 'https://github.com/slavamak',
    title: 'My page on GitHub'
  },
  instagram: {
    url: 'https://instagram.com/slavamak.dev',
    title: 'My page on Instagram'
  },
  telegram: {
    url: 'https://t.me/slavamak_dev',
    title: 'Click to chat Telegram'
  },
  whatsapp: {
    url: 'https://wa.me/79043307244',
    title: 'Click to chat WhatsApp'
  }
};

function HeroLinks() {
  return (
    <div class="hero-content__links">
      <Link>{links[0]}</Link>
    </div>
  )
}

export default HeroLinks;