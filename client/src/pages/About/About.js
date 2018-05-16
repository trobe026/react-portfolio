import React, { Component } from "react";
import './About.css';

export default class About extends Component {

  render() {
    return (
<div className='col-md-12'>
        <div className='row well well-lg'>
            <div className='col-md-6 col-sm-12'>
              <h1>about me</h1>
              <p className='lead'>I'm a Full-Stack Web Developer based in Austin, TX.</p>
                <p>I enjoy building simple, intuitive front-end designs with intricate, highly functional back-end logic and concise data modeling. I currently work as a Business Solutions Analyst for Ascension Information Services assisting with project and vendor management, application support, and product enhancements for Seton hospitals in Austin, TX.</p>
              <p>In my spare time you'll find me running with my awesome dog Dingo and exploring all of Austin's great trails.  I've been a long time guitar player and love recording and mixing music. I especially enjoy playing blues and improv jazz, and get out to enjoy Austin's vibrant music scene whenever possible.</p>
                <p>To check out my development projects, please
                <a href="/portfolio"> click here</a>!</p>
              </div>
              <div className='col-md-6 col-sm-12 '>
                <img className='img-responsive center' id="profile-pic" src="images/img2.jpg" alt="myface"/>
              </div>
        </div>
      </div>
    );
  }
}
