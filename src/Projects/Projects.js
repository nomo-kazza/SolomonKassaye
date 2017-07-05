import React, { Component } from 'react';
import Project from '../Project';
import './Projects.css';

class Projects extends Component {
  constructor() {
    super();
    this.projects = [
      { projectName: `SunShot - Building DataCloud Application UI Prototype`,
        projectTechs: ['Html5', 'Javascript', 'Css3', 'Angular'],
        projectTags: ['Login', 'Validation Error', 'Search', 'Sidebar', 'Tabs',
          'Google Map', 'Expandable Row', 'Filter', 'Modal', 'Progress Bar', 'Search'],
        videoSrc: `https://dl.dropboxusercontent.com/s`+
              `/pqjtze1xoiu6ua4/SunShot-Building-DataCloud_project_1080p.mp4`,
        thumbSrc: `http://res.cloudinary.com/nomo-kazza/image/upload/v1498940815`+
        `/web-assets/bdc_07.1.2_All_sites_-_Map_View.png` },
      { projectName: `DINNACO - COUNSELING MATCHING APPLICATION UI PROTOTYPE `,
        projectTechs: ['Html5', 'Javascript', 'Css3', 'Jquery', 'Angular'],
        projectTags: ['Login', 'Carousel', 'Quiz', 'Steps', 'Editable', 'List View', 'Grid View',
          'Table Sort', 'Pagination', 'Display per page', 'Filtering', 'Dropdowns', 'Up/Down row',
          'Remove row', 'Modal', 'Export CSV'],
        videoSrc: `https://dl.dropboxusercontent.com/s`+
              `/p07me8u4co8qv95/IBM_CASTEL_-_DESKTOPTablet_Project_1080p.mp4`,
        thumbSrc: `http://res.cloudinary.com/nomo-kazza/image/upload/v1499123074`+
        `/dinnaco1.png` },

      { projectName: `IBM CASTLE - MOBILE/TABLET/DESKTOP RESPONSIVE UI PROTOTYPE`,
        projectTechs: ['Html5', 'Javascript', 'Css3', 'Bootstrap', 'Jquery', 'Angular'],
        projectTags: ['Login', 'hamburger menu', 'slide animation', 'User thumbnail', 'Search',
          'Autocomplete', 'Fixed Header', 'auto truncated', 'Tabs', 'Modal', 'Multiple Selection',
          'NoWrap', 'Refine/Filter', 'Message Detail', 'New Message', 'Validation Error'],
        videoSrc: `https://dl.dropboxusercontent.com/s`+
              `/p07me8u4co8qv95/IBM_CASTEL_-_DESKTOPTablet_Project_1080p.mp4`,
        thumbSrc: `http://res.cloudinary.com/nomo-kazza/image/upload/v1499123074`+
        `/web-assets/ibm-castl-win2_pmqlo6.jpg` },

      { projectName: ``,
        projectTechs: ['Html5', 'Javascript', 'Css3'],
        projectTags: [],
        videoSrc: `https://dl.dropboxusercontent.com/s`+
              `/166vxs7atyldeio/PEPSICO_-_MEDIAFLY_MOBILE_APP_PROJECT_1080p.mp4`,
        thumbSrc: `https://res.cloudinary.com/nomo-kazza/image/upload/v1498931545`+
        `/web-assets/buildingdc1_bwfvr4.jpg` },
      { projectName: ``,
        projectTechs: ['Html5', 'Javascript', 'Css3'],
        projectTags: [],
        videoSrc: `https://dl.dropboxusercontent.com/s`+
              `/v51v54795b40cn8/IBM_-_SIBM_-_CLIPSTREAMER_RESPONSIVE_UI_480p.mp4?dl=0`,
        thumbSrc: `http://res.cloudinary.com/nomo-kazza/image/upload/v1498922509`+
        `/web-assets/clipstream-win1_g1y2iw.jpg` },
      { projectName: ``,
        projectTechs: ['Html5', 'Javascript', 'Css3'],
        projectTags: [],
        videoSrc: `https://dl.dropboxusercontent.com/s`+
              `/pqjtze1xoiu6ua4/SunShot-Building-DataCloud_project_1080p.mp4`,
        thumbSrc: `https://res.cloudinary.com/nomo-kazza/image/upload/v1498931545`+
        `/web-assets/buildingdc1_bwfvr4.jpg` },
      { projectName: ``,
        projectTechs: ['Html5', 'Javascript', 'Css3'],
        projectTags: [],
        videoSrc: `https://dl.dropboxusercontent.com/s`+
              `/p07me8u4co8qv95/IBM_CASTEL_-_DESKTOPTablet_Project_1080p.mp4`,
        thumbSrc: `http://res.cloudinary.com/nomo-kazza/image/upload/v1498922514`+
        `/web-assets/ibm-castl-win2_pmqlo6.jpg` },

    ]

    this.videoSrc = `https://dl.dropboxusercontent.com/s`+
              `/4dny6m8149jsyfs/Previous_Projects_1080p.mp4`;
    this.tcDash = `https://www.topcoder.com/members/nomo_kazza`+
              `/details/?track=DEVELOP&subTrack=UI_PROTOTYPE_COMPETITION&tab=challenges`;
  }
//videoSrc={project.videoSrc} thumbSrc={project.thumbSrc}
  render() {
    const cardsList = this.projects.map((project, index) => {
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
          {cardsList}
        </div>
      </div>
    );
  }
}

export default Projects;