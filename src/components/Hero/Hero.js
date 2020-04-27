import React from 'react';

import './hero.css';

import HeroLinks from './HeroLinks';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero-content">
          <p className="hero-content__greeting">Hello!</p>
          <h1 className="h1 hero-content__heading">I'm Slava Maksimov</h1>
          <p className="hero-content__description">Freelancer, web developer. Website, landing page, online store or an individual solution based on Wordpress and Shopify.</p>

          <HeroLinks />

        </div>
        <div className="hero-card">
          <img className="hero-card__avatar" src="/images/slava.jpg" alt="SlavaMak" />
        </div>
      </div>
    </section>
  )
};

export default Hero;