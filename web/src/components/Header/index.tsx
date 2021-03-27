import classNames from 'classnames'

import Link from '../Link'
import HeaderNav from './HeaderNav'
import Icon from '../Icon'

import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={classNames('container', styles.header__container)}>

        <Link className={styles.header__logo} url="/">
          <img src="/images/logo.png" alt="Slava Maksimov"/>
          <span>SlavaMak</span>
        </Link>

        <HeaderNav />

        <Link className={styles.header__email} url="mailto:hello@slavamak.com" title="Send me a message">
          <Icon name="email" />
        </Link>

      </div>
    </header>
  )
}

export default Header
