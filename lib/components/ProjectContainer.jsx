import React, { Component } from 'react';
import ProjectCard from './ProjectCard.jsx';
import projects from '../projects';


class ProjectContainer extends Component {


  render() {
      return (
        <div className='project-container'>
          <p className='tagline'>Front end developer: crafting code that brings new ideas and products to life</p>
          <h2 className="section-title">Featured Work</h2>
          <ProjectCard />
        </div>
      );
  }
}

module.exports = ProjectContainer;
