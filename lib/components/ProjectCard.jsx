import React, { Component } from 'react';
import projects from '../projects.js'


export default class ProjectCard extends Component {


  render() {
    const projectCard = projects.map((project) =>
    <div className='card' key={project.id}>
    <h2>{project.title}</h2>
    <img className='screenshot' src={project.imgLink}></img>
    <h3>{project.description}</h3>
    <ul className='tech'>
        {project.techStack.map(function (tech, i) {
          return <li key={i}>{tech}</li>;
        })}
    </ul>
    <h4><a href={project.codeLink} title="GitHub">
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
