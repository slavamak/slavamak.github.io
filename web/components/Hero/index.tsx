import classNames from 'classnames'

import HeroLinks from './HeroLinks'

import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={classNames('container', styles.hero__container)}>
        <div className={styles['hero-content']}>
          <p className={styles['hero-content__greeting']}>Hello!</p>
          <h1 className={classNames('h1', styles['hero-content__heading'])}>I'm Slava Maksimov</h1>
          <p className={styles['hero-content__description']}>Freelancer, web developer. Website, landing page, online store or an individual solution based on React and Shopify.</p>

          <HeroLinks />

        </div>
        <div className={styles['hero-card']}>
          <img className={styles['hero-card__avatar']} src="/images/slava.jpg" alt="SlavaMak" />
        </div>
      </div>
    </section>
  )
}

export default Hero
