import classNames from 'classnames'
import { HomeProps } from '../../pages'

import Link from '../Link/'

import styles from './Projects.module.css'

function Projects({ projects }: HomeProps) {
  return (
    <section className={styles.projects} id="projects">
      <div className="container">
        <h2 className={classNames('h2', styles.projects__heading)}>Latest projects</h2>
        <ul className={styles['projects-list']}>
          {
            projects.map(({ title, url, description, technologies }, index) => (
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
