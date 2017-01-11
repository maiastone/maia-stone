import React, { Component } from 'react';
import projects from '../projects.js'


export default class ProjectCard extends Component {


  render() {
    const projectCard = projects.map((project) =>
    <div className='card' key={project.id}>
      <div className='card-flex-container'>
        <img className='screenshot' src={project.imgLink}></img>
        <h2>{project.title}</h2>
        <p className='description'>{project.description}</p>
      </div>
      <ul className='tech'>
          {project.techStack.map(function (tech, i) {
            return <li key={i}>{tech}</li>;
          })}
      </ul>
      <h4><a href={project.codeLink} className='card-link' title="GitHub">
            View the code
          </a>
      </h4>
      <h4>{project.liveLink}</h4>
    </div>
    );

    return (
      <div>
      {projectCard}
      </div>
    );
  }
}
