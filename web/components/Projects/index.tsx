import classNames from 'classnames'
import { useState, useEffect } from 'react'

import Link from '../Link/'

import styles from './Projects.module.css'

type ListData = {
  title: string,
  url: string,
  description: string,
  technologies: string
}

function Projects() {
  const [list, setList] = useState<ListData[]>(null)

  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(json => setList(json.list))
  }, [])

  if (list === null) {
    return (
      <section className={styles.projects} id="projects">
        <div className="container">
          <h2 className={classNames('h2', styles.projects__heading)}>Latest projects</h2>
          <span>Loading...</span>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.projects}id="projects">
      <div className="container">
        <h2 className={classNames('h2', styles.projects__heading)}>Latest projects</h2>
        <ul className={styles['projects-list']}>
          {
            list.map(({ title, url, description, technologies }, index) => (
              <li className={styles['projects-list__item']} key={ index }>
                <div className={styles['projects-list__item-details']}>
                  <Link className={styles['projects-list__item-title']} url={ url } title={ title } target="_blank">
                    <h3 className="h3">{ title }</h3>
                  </Link>
                  <h4 className={classNames('h4', styles['projects-list__item-description'])}>{ description }</h4>
                  <p className={styles['projects-list__item-technologies']}>{ technologies }</p>
                </div>
              </li>
            )).reverse()
          }
        </ul>
      </div>
    </section>
  )
}

export default Projects
