import classNames from "classnames"

import { urlForImage } from "../../libs/sanity"
import Icon from "../Icon"
import Link from "../Link"
import styles from "./Header.module.css"
import HeaderNav from "./HeaderNav"

function Header({ data, meta }) {
  const { showActionsMenu, menu } = data
  const {
    logo,
    logo: { logo_alt: logoAlt },
    email,
    mailto_title: mailtoTitle,
  } = meta

  const logoURl = urlForImage(logo).url()

  return (
    <header className={styles.header}>
      <div className={classNames("container", styles.header__container)}>
        <Link className={styles.header__logo} href="/">
          <img src={logoURl} alt={logoAlt} />
          <span>{logoAlt}</span>
        </Link>

        <HeaderNav menu={menu} />

        {showActionsMenu && (
          <Link
            className={styles.header__email}
            href={`mailto:${email}`}
            title={mailtoTitle}
          >
            <Icon name="email" />
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header
