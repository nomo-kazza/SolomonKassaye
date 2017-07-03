import React, { Component } from 'react';
import './ContactMe.css';

class ContactMe extends Component {

  render() {
    return (
      <div className="sk-contact-me">
        <div className="sk-contact-form">
          <h1>Contact Me</h1>
          <form name="skContactForm">
            <div className="form-input">
              <label htmlFor="your-name">Name</label>
              <input type="text" id="your-name" placeholder="Name"/>
            </div>
            <div className="form-input">
              <label htmlFor="your-name">Email</label>
              <input type="email" id="your-name" placeholder="Email"/>
            </div>
            <div className="form-input">
              <label htmlFor="your-name">Message</label>
              <textarea type="text" id="your-name" placeholder="Message"></textarea>
            </div>
            <div className="submit-link">
              <a href="void(0)" className="submit-btn">Send</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactMe;