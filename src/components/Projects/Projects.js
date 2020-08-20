import React, { Component } from 'react';

import Link from '../Link/Link';

import './projects.css';

class Projects extends Component {

  state = {
    list: null
  };

  async componentDidMount() {
    let response = await fetch('/projects.json');
    let projects = await response.json();

    this.setState({
      list: projects.list
    });
  };

  render() {
    const { list } = this.state;

    if (list === null) {
      return (
        <section className="projects" id="projects">
          <div className="container">
            <h2 className="h2 projects__heading">Latest projects / Loading..</h2>
          </div>
        </section>
      )
    };

    return (
      <section className="projects" id="projects">
        <div className="container">
          <h2 className="h2 projects__heading">Latest projects</h2>
          <ul className="projects-list">
            {
              list.map(({ title, url, description, technologies }) => (
                <li className="projects-list__item">
                  <div className="projects-list__item-details">
                    <Link className="projects-list__item-title" url={ url } title={ title } target="_blank">
                      <h3 className="h3">{ title }</h3>
                    </Link>
                    <h4 className="h4 projects-list__item-description">{ description }</h4>
                    <p className="projects-list__item-technologies">{ technologies }</p>
                  </div>
                </li>
              )).reverse()
            }
          </ul>
        </div>
      </section>
    );
  }
};

export default Projects;