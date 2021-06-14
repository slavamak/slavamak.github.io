import classNames from "classnames"

import Link from "../Link"
import HeaderNav from "./HeaderNav"
import Icon from "../Icon"
import { urlForImage } from "../../libs/sanity"
import styles from "./Header.module.css"

function Header({data, meta}) {
  const {showActionsMenu, menu} = data
  const {logo, logo: {logo_alt: logoAlt}, email, mailto_title: mailtoTitle} = meta

  const logoURl = urlForImage(logo).url()

  return (
    <header className={styles.header}>
      <div className={classNames("container", styles.header__container)}>
        <Link className={styles.header__logo} url="/">
          <img src={logoURl} alt={logoAlt} />
          <span>{logoAlt}</span>
        </Link>

        <HeaderNav menu={menu} />

        {showActionsMenu && <Link
          className={styles.header__email}
          url={`mailto:${email}`}
          title={mailtoTitle}
        >
          <Icon name="email" />
        </Link>}
      </div>
    </header>
  )
}

export default Header
