
import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

  render() {
    return (
      <div className="sk-footer">
        <footer>
            <div className="copyright">
                <section>Solomon Kassaye © 2017</section>
            </div>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/solomon-kassaye-3b5b3586/">
                    <span className="social-icon linkedin-icon"></span>
                </a>
                <a href="mailto:solomonneedajob@gmail.com">
                    <span className="social-icon gmail-icon"></span>
                </a>
                <a href="https://github.com/nomo-kazza">
                   <span className="social-icon github-icon"></span>
                </a>
                <a href="https://twitter.com/nomo_kazza">
                    <span className="social-icon twitter-icon"></span>
                </a>
                <a href="https://www.facebook.com/nomolosk">
                    <span className="social-icon facebook-icon"></span>
                </a>
                <a href="https://www.youtube.com/channel/UC9L4zEn52qMdWNFf2wtkQGg">
                   <span className="social-icon youtube-icon"></span>
                </a>
                <a href="skype:+15716352606?call">
                    <span className="social-icon skype-icon"></span>
                </a>
                <a href="https://www.instagram.com/nomo900/">
                    <span className="social-icon instagram-icon"></span>
                </a>
            </div>
        </footer>
      </div>
    );
  }
}

export default Footer;

