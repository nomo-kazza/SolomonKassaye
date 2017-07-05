import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.toggleHamburger = this.toggleHamburger.bind(this);
  }
  toggleHamburger() {
    this.setState({isOpen: !this.state.isOpen})
  }
  render() {
    return (
      <div className="sk-header">
        <div className="logo"><img src="https://dl.dropboxusercontent.com/s/8mocuvvzimcyzkp/my-logo.png" alt="logo"/></div>
        <nav>
            <ul>
                <li><Link to="/"><span></span>Home</Link></li>
                <li><Link to="/projects"><span></span>Projects</Link></li>
                <li><Link to="/achievements"><span></span>Achievements</Link></li>
                <li><Link to="/about-me"><span></span>About Me</Link></li>
                <li><Link to="/contact-me"><span></span>Contact Me</Link></li>
            </ul>
            <div id="nav-icon1" className={this.state.isOpen ? 'open' : ''} onClick={this.toggleHamburger}>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </nav>
      </div>
    );
  }
}

export default Header;