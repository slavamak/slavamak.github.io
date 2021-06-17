import BlockContent from "@sanity/block-content-to-react"
import classNames from "classnames"

import { urlForImage } from "../../libs/sanity"
import styles from "./Hero.module.css"
import HeroLinks from "./HeroLinks"

function Hero({ data }) {
  const {
    photo,
    photo: { photo_alt: photoAlt },
    social_links: links,
    content,
  } = data
  const photoURl = urlForImage(photo).url()

  const overrides = {
    h1: (props) => (
      // eslint-disable-next-line jsx-a11y/heading-has-content
      <h1
        className={classNames("h1", styles["hero-content__heading"])}
        {...props}
      />
    ),
    subTitle: (props) => (
      <p className={styles["hero-content__greeting"]} {...props} />
    ),
    normal: (props) => (
      <p className={styles["hero-content__description"]} {...props} />
    ),
  }

  const serializers = {
    types: {
      block: (props) =>
        overrides[props.node.style]
          ? overrides[props.node.style]({ children: props.children })
          : BlockContent.defaultSerializers.types.block(props),
    },
  }

  return (
    <section className={styles.hero}>
      <div className={classNames("container", styles.hero__container)}>
        <div className={styles["hero-content"]}>
          <BlockContent blocks={content} serializers={serializers} />
          <HeroLinks links={links} />
        </div>
        <div className={styles["hero-card"]}>
          <div className={styles["hero-card__avatar-wrapper"]}>
            <img
              className={styles["hero-card__avatar"]}
              src={photoURl}
              alt={photoAlt}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
