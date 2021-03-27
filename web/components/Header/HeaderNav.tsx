import {Nav, NavItem} from '../Nav'

import styles from './Header.module.css'

function HeaderNav() {
  return (
    <Nav className={styles.header__nav}>
      <NavItem url="#projects">Projects</NavItem>
    </Nav>
  )
}

export default HeaderNav
