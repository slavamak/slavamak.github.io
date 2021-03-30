import { HomeProps } from '../../pages'

import Link from '../Link'
import Icon from '../Icon'

import styles from './Hero.module.css'

function HeroLinks({ links }: HomeProps) {
  return (
    <div className={styles['hero-content__links']}>
      {links.map((item, i) => (
          <Link key={ i } url={ item.url } title={ item.title } target="_blank" className={styles['hero-content__links-item']} unLink>
            <Icon name={ item.name } />
          </Link>
        )
      )}
    </div>
  )
}

export default HeroLinks
