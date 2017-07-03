import React, { Component } from 'react';
import Project from '../Project';
import './Projects.css';

class Projects extends Component {
  constructor() {
    super();
    this.projects = [
      { vSrc: `https://dl.dropboxusercontent.com/s`+
              `/pqjtze1xoiu6ua4/SunShot-Building-DataCloud_project_1080p.mp4`,
        thumbSrc: `http://res.cloudinary.com/nomo-kazza/image/upload/v1498940815/web-assets/bdc_07.1.2_All_sites_-_Map_View.png` },
      { vSrc: `https://dl.dropboxusercontent.com/s`+
              `/p07me8u4co8qv95/IBM_CASTEL_-_DESKTOPTablet_Project_1080p.mp4`,
        thumbSrc: `http://res.cloudinary.com/nomo-kazza/image/upload/v1498922514/web-assets/ibm-castl-win2_pmqlo6.jpg` },
      { vSrc: `https://dl.dropboxusercontent.com/s`+
              `/166vxs7atyldeio/PEPSICO_-_MEDIAFLY_MOBILE_APP_PROJECT_1080p.mp4`,
        thumbSrc: `https://res.cloudinary.com/nomo-kazza/image/upload/v1498931545/web-assets/buildingdc1_bwfvr4.jpg` },
      { vSrc: `https://dl.dropboxusercontent.com/s`+
              `/v51v54795b40cn8/IBM_-_SIBM_-_CLIPSTREAMER_RESPONSIVE_UI_480p.mp4?dl=0`,
        thumbSrc: `http://res.cloudinary.com/nomo-kazza/image/upload/v1498922509/web-assets/clipstream-win1_g1y2iw.jpg` },
      { vSrc: `https://dl.dropboxusercontent.com/s`+
              `/pqjtze1xoiu6ua4/SunShot-Building-DataCloud_project_1080p.mp4`,
        thumbSrc: `https://res.cloudinary.com/nomo-kazza/image/upload/v1498931545/web-assets/buildingdc1_bwfvr4.jpg` },
      { vSrc: `https://dl.dropboxusercontent.com/s`+
              `/p07me8u4co8qv95/IBM_CASTEL_-_DESKTOPTablet_Project_1080p.mp4`,
        thumbSrc: `http://res.cloudinary.com/nomo-kazza/image/upload/v1498922514/web-assets/ibm-castl-win2_pmqlo6.jpg` },

    ]


    this.vSrc = `https://dl.dropboxusercontent.com/s`+
              `/4dny6m8149jsyfs/Previous_Projects_1080p.mp4`;
    this.tcDash = `https://www.topcoder.com/members/nomo_kazza`+
              `/details/?track=DEVELOP&subTrack=UI_PROTOTYPE_COMPETITION&tab=challenges`;
  }

  render() {
    const cardsList = this.projects.map((project, index) => {
      return <Project videoSrc={project.vSrc} thumbSrc={project.thumbSrc} key={index}></Project>
    });
    return (
      <div className="sk-projects">
        <div className="sk-projects-video">
          <h4>Projects I participated while I was working with Topcoder at <a href={this.tcDash}>www.topcoder.com</a></h4>
          <div className="bg-cover"></div>
          <video autoPlay="true" preload="true" loop="true" muted>
            <source src={this.vSrc} type="video/mp4"></source>
          </video>
        </div>
        <h3>Previous Projects</h3>
        <div className="sk-project-cards-container">
          {cardsList}
        </div>
      </div>
    );
  }
}

export default Projects;