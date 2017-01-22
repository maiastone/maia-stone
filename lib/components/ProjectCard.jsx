import React, { Component } from 'react';
import projects from '../projects.js'


export default class ProjectCard extends Component {


  render() {
    const projectCard = projects.map((project) =>
    <div className='card' key={project.id}>
      <h2>{project.title}</h2>
      <div className='card-flex-container'>
        <img className='screenshot' src={project.imgLink}></img>
        <div className='card-text'>
          <p className='description'>{project.description}</p>
          <ul className='tech'>
            {project.techStack.map(function (tech, i) {
              return <li key={i}>{tech}</li>;
            })}
            </ul>
          <h4>
            <a href={project.codeLink} className='card-link' title="GitHub">
                View the code
            </a>
          </h4>
          <h4>
            {project.liveLink.length > 1 ?
            <a href={project.liveLink} className='card-link' title="Live">
                See it live
            </a> : <p></p>}
          </h4>
        </div>
      </div>
    </div>
    );

    return (
      <div className='project-card-container'>
      {projectCard}
      </div>
    );
  }
}
