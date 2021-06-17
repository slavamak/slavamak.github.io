import classNames from "classnames"

import Link from "../Link"
import styles from "./Projects.module.css"

function Projects({ data }) {
  const { title: heading, items: projects } = data

  return (
    <section className={styles.projects} id="projects">
      <div className="container">
        <h2 className={classNames("h2", styles.projects__heading)}>
          {heading}
        </h2>
        <ul className={styles["projects-list"]}>
          {projects.map(({ _id, title, url, description, technologies }) => (
            <li className={styles["projects-list__item"]} key={_id}>
              <div className={styles["projects-list__item-details"]}>
                <Link
                  className={styles["projects-list__item-title"]}
                  href={url}
                  title={title}
                  target="_blank"
                >
                  <h3 className="h3">{title}</h3>
                </Link>
                <h4
                  className={classNames(
                    "h4",
                    styles["projects-list__item-description"]
                  )}
                >
                  {description}
                </h4>
                <p className={styles["projects-list__item-technologies"]}>
                  {technologies.join(", ")}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects
