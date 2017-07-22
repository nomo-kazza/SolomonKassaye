import React, { Component } from 'react';
import './ContactMe.css';

class ContactMe extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    var form = document.querySelector('form')

    fetch('/contact-me', {method: 'POST', body: {name: "name", email: "mail"}})
      .then((data) => {
        console.log(data.json())
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="sk-contact-me">
        <div className="sk-contact-form">
          <h1>Contact Me</h1>
          <form name="skContactForm" action="contact-me" method="post">
            <div className="form-input">
              <label htmlFor="your-name">Name</label>
              <input type="text" id="your-name" placeholder="Name" name="name"/>
            </div>
            <div className="form-input">
              <label htmlFor="your-name">Email</label>
              <input type="email" id="your-name" placeholder="Email" name="email"/>
            </div>
            <div className="form-input">
              <label htmlFor="your-name">Message</label>
              <textarea type="text" id="your-name" placeholder="Message" name="message"></textarea>
            </div>
            <div className="submit-link">
              <input type="submit" name="submit" className="submit-btn" value="Send" onClick={this.handleSubmit}></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactMe;