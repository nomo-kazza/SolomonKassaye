import React, { Component } from 'react';
import './Achievements.css';

class Achievements extends Component {

  render() {
    return (
      <div className="sk-achievements-container">
        <h4>Achievements</h4>
        <p className="coursera-moc full-stack floated-achievement">Coursera Full Stack Specialization MOC</p>
        <p className="coursera-moc android floated-achievement">Coursera mobile apps for android</p>
        <p className="coursera-moc ruby floated-achievement">Coursera Ruby on Rials</p>
        <p className="topcoder-open floated-achievement">Topcoder Open Challenge (TCO)</p>
        <p className="mongodb floated-achievement">Mongodb University</p>
        <div className="sk-achievements">
          <div className="sk-achievements-list">
            <ul>
              <li>
                <img src="https://dl.dropboxusercontent.com/s/fhiq6196sec7rsl/android.jpg" alt="certificate"/>
              </li>
              <li>
                <img src="https://dl.dropboxusercontent.com/s/0pz7fyg3xd4nlhy/htmlCssJavascript.jpg" alt="certificate"/>
              </li>
              <li>
                <img src="https://dl.dropboxusercontent.com/s/kiuylugj1ylsskb/javascriptFramework.jpg" alt="certificate"/>
              </li>
              <li>
                <img src="https://dl.dropboxusercontent.com/s/n8w59ef4aceijrf/multiplatformMobileApp.jpg" alt="certificate"/>
              </li>
              <li>
                <img src="https://dl.dropboxusercontent.com/s/3pucijvhrelnnb0/rubyOnRails.jpg" alt="certificate"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Achievements;