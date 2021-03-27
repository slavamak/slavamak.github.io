import styles from './Link.module.css'

import classNames from 'classnames'

type LinkProps = {
  className?: string,
  url: string,
  title?: string,
  children: JSX.Element | JSX.Element[],
  unLink?: boolean,
  target?: string
}

function Link({ className, url, title, children, unLink, target }: LinkProps) {
  return (
    <a className={ classNames({ [styles.link]: !unLink }, { [className]: className }) }
       href={ url }
       title={ title }
       { ...(target === '_blank' ? { target, rel: 'noopener noreferrer' } : null) }
      >
      { children }
    </a>
  )
}

export default Link
