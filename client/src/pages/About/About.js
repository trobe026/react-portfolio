import React, { Component } from "react";
import './About.css';
class About extends Component {

  render() {
    return (
      <div className="container-fluid">
            <div className="col-sm-10 col-sm-offset-1 col-xs-12">
              <div>
                <h1>about me</h1>
                <h3>Full-Stack Web Developer based in Austin, TX.</h3>
                  <p>I also work full-time as a Business Solutions Analyst for Ascension Information Services assisting with application support and project/vendor management for AIS product enhancements at Seton hospitals here in Austin.</p>
                <p>In my spare time I enjoy running with my awesome dog Dingo and exploring all of Austin's great trails.  I've been a long time guitar player and love recording and mixing music, and especially enjoy playing blues and improv jazz. I get out and enjoy Austin's vibrant music scene whenever possible. To check out my development projects, please
                  <a href="/portfolio">click here</a>!</p>
                  <img id="profile-pic" src="images/img3.jpg" alt="myface"/>
                </div>
              </div>
          </div>
    );
  }
}

export default About;
