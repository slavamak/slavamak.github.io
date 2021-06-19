import classNames from "classnames"

import Icon from "../Icon"
import Link from "../Link"
import { Nav, NavItem } from "../Nav"

function HeaderNav({ menu, showActionsMenu, email, mailtoTitle }) {
  const { items: menuItems } = menu

  return (
    <Nav className="inline-flex items-center">
      {menuItems.map(({ _key, title, url }, index) => (
        <NavItem
          url={url}
          key={_key}
          className={classNames({
            "ml-6": index !== 0,
          })}
        >
          {title}
        </NavItem>
      ))}

      {showActionsMenu && (
        <Link
          className="ml-6 text-none"
          href={`mailto:${email}`}
          title={mailtoTitle}
        >
          <Icon name="email" />
        </Link>
      )}
    </Nav>
  )
}

export default HeaderNav
