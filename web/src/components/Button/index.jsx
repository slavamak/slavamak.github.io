import classNames from "classnames"

import styles from "./Button.module.css"

function Button({ className, url, children }) {
  return (
    <a
      className={classNames(styles.button, { [className]: className })}
      href={url}
    >
      <span>{children}</span>
    </a>
  )
}

export default Button
