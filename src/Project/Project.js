import React, { Component } from 'react';
import './Project.css';
import project2 from '../images/projects/project2.gif';

class Project extends Component {

  render(props) {
    return (
      <div className="sk-project">
        <img src={project2} alt="project"/>
        <a href="void:0" className="project-name">Project Name</a>
        <div className="project-technologies">
          <p>Technologies :</p>
          <ul>
            <li><a href="void:0">Html5</a></li>
            <li><a href="void:0">Javascript</a></li>
            <li><a href="void:0">Css3</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Project;