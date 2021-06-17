import Icon from "../Icon"
import Link from "../Link"
import NowPlaying from "../NowPlaying"
import styles from "./Footer.module.css"

function Footer({ data }) {
  const { referral } = data

  return (
    <footer className={styles.footer}>
      <div className="container">
        <NowPlaying />

        <div className={styles["footer-links"]}>
          <Link
            className={styles["footer-links__item"]}
            href={referral}
            target="_blank"
            title="DigitalOcean"
          >
            <Icon name="do" width={160} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
