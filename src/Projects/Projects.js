import React, { Component } from 'react';
import Project from '../Project';
import './Projects.css';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      projects: []
    }
    this.videoSrc = `https://dl.dropboxusercontent.com/s`+
              `/4dny6m8149jsyfs/Previous_Projects_1080p.mp4`;
    this.tcDash = `https://www.topcoder.com/members/nomo_kazza`+
              `/details/?track=DEVELOP&subTrack=UI_PROTOTYPE_COMPETITION&tab=challenges`;
  }

  componentDidMount() {
    var that = this;
    var url = 'https://res.cloudinary.com/nomo-kazza/raw/upload/v1499786407/web-assets/projects.json'

    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          projects: responseJson.projects,
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const cardsList = this.state.projects.map((project, index) => {
      return <Project {...project} key={index}></Project>
    });
    return (
      <div className="sk-projects">
        <div className="sk-projects-video">
          <div className="sk-h4"><h4>Projects I participated while I was working with Topcoder at <a href={this.tcDash}>www.topcoder.com</a></h4></div>
          <div className="bg-cover"></div>
          <video autoPlay="true" preload="true" loop="true" muted>
            <source src={this.videoSrc} type="video/mp4"></source>
          </video>
        </div>
        <h3>Previous Projects</h3>
        <div className="sk-project-cards-container">
          { cardsList }
        </div>
      </div>
    );
  }
}

export default Projects;