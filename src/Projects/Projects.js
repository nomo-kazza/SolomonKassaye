import React, { Component } from 'react';
import Project from '../Project';
import './Projects.css';

class Projects extends Component {

  render() {
    return (
      <div className="sk-projects">
        <Project></Project>
        <Project></Project>
        <Project></Project>
      </div>
    );
  }
}

export default Projects;