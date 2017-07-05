import React, { Component } from 'react';
import ProjectsSlider from '../ProjectsSlider';
import Achievements from '../Achievements';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="sk-wrapper">
        <div className="sk-main-content">
          <div className="bg-cover"></div>
          <div className="intro-bg"></div>
          <div className="sk-section sk-intro-container">
            <h3>Hi, I am Solomon Kassaye</h3>
            <h4>Welcome to my portfolio.</h4>
            <h5>I invite you to explore my site to get
              a better understanding of my specialties, technique and professional experience.
              What you’ll find below is the projects I was working at <a href="https://www.topcoder.com/members/nomo_kazza/" className="link"> www.topcoder.com</a></h5>
            <h5>Enjoy browsing, and get in touch with any questions.</h5>
            <a href="mailto:solomonjobsearch@gmail.com?Subject=Hello%20Solomon" className="sk-btn contact-me-btn">Contact Me</a>
          </div>
          <div className="sk-section sk-carousel-container">
            <ProjectsSlider></ProjectsSlider>
            <div className="projects-right">
              <h4>Previous Projects</h4>
              <h5>I used different technologies, from simple page styling and javascript interaction to google map API and d3 chart interactions</h5>
              <a href="/projects" className="sk-btn more-btn">See More</a>
            </div>
          </div>

          <div className="sk-section sk-achievements-container" id="achievements">
            <Achievements></Achievements>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
