import Link from '../Link'
import Icon from '../Icon'

import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles['footer-links']}>
          <Link className={styles['footer-links__item']} url="digitalocean" target="_blank" title="DigitalOcean">
            <Icon name="do" width={160} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
