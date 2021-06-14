import Icon from "../Icon"
import Link from "../Link"
import styles from "./Hero.module.css"

function HeroLinks({ links }) {
  return (
    <div className={styles["hero-content__links"]}>
      {links.map((link) => (
          <Link key={ link._key } url={ link.url } title={ link.title } target="_blank" className={styles['hero-content__links-item']} unLink>
            <Icon name={ link.icon } />
          </Link>
        )
      )}
    </div>
  )
}

export default HeroLinks
