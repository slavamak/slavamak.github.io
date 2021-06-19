import classNames from "classnames"
import NextLink from "next/link"

import styles from "./Link.module.css"

function Link({ className, href, title, children, unLink, target }) {
  const props =
    target === "_blank" ? { target, rel: "noopener noreferrer" } : null

  return (
    <NextLink href={href}>
      <a
        className={classNames(
          { [styles.link]: !unLink },
          { [className]: className }
        )}
        title={title}
        {...props}
      >
        {children}
      </a>
    </NextLink>
  )
}

export default Link
