import React, { Component } from 'react';
import './Project.css';

class Project extends Component {

  render(props) {
    const vSrc = this.props.videoSrc;
    const iSrc = this.props.thumbSrc;
    return (
      <div className="sk-project">
        <div className="sk-project-card">
          
          <div className="project-thumbnail">
            <img src={iSrc} alt=""/>
            <span className="hover-bg"></span>
          </div>
          <div className="project-info">
            <a href="void(0)" className="project-name">SunShot - Building DataCloud Application UI Prototype </a>
            <div className="project-technologies">
              <p>Technologies :</p>
              <ul>
                <li><a href="void(0)">Html5</a></li>
                <li><a href="void(0)">Javascript</a></li>
                <li><a href="void(0)">Css3</a></li>
              </ul>
            </div>
            <div className="project-technologies project-tags">
              <p>Tags :</p>
              <ul>
                <li><a href="void(0)">Login</a></li>
                <li><a href="void(0)">Validation Error</a></li>
                <li><a href="void(0)">Search</a></li>
                <li><a href="void(0)">Sidebar</a></li>
                <li><a href="void(0)">Tabs</a></li>
                <li><a href="void(0)">Google Map</a></li>
                <li><a href="void(0)">Expandable Row</a></li>
                <li><a href="void(0)">Filter</a></li>
                <li><a href="void(0)">Modal</a></li>
                <li><a href="void(0)">Progress Bar</a></li>
                <li><a href="void(0)">Search</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="video-container hidden">
          <div className="bg-cover"></div>
          <video autoPlay preload controls muted>
            <source src={vSrc} type="video/mp4"></source>
          </video>
        </div>
      </div>
    );
  }
}

export default Project;