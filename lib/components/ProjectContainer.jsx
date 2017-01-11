import React, { Component } from 'react';
import ProjectCard from './ProjectCard.jsx';
import projects from '../projects';


class ProjectContainer extends Component {


  render() {
      return (
        <div className='project-container'>
          <blockquote className='tagline'>Front end developer: crafting code that brings new ideas and products to life</blockquote>
          <ProjectCard />
        </div>
      );
  }
}

module.exports = ProjectContainer;
