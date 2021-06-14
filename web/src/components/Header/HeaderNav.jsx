import { Nav, NavItem } from "../Nav"

import styles from "./Header.module.css"

function HeaderNav({menu}) {
  const {items: menuItems} = menu

  return (
    <Nav className={styles.header__nav}>
      {menuItems.map(({_key, title, url}) => (
        <NavItem url={url} key={_key}>{title}</NavItem>
      ))}
    </Nav>
  )
}

export default HeaderNav
