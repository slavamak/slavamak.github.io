import classNames from "classnames"

import styles from "./Link.module.css"

function Link({ className, url, title, children, unLink, target }) {
  const props =
    target === "_blank" ? { target, rel: "noopener noreferrer" } : null

  return (
    <a
      className={classNames(
        { [styles.link]: !unLink },
        { [className]: className }
      )}
      href={url}
      title={title}
      {...props}
    >
      {children}
    </a>
  )
}

export default Link
