import React, { Component } from "react";
import './Portfolio.css';

class Portfolio extends Component {

  render() {
    return (
      <section>
          <div className="container-fluid">
            <div className="col-sm-10 col-sm-offset-1 col-xs-12">
                <section>
                  <h2>Portfolio<i className="fa fa-briefcase" aria-hidden="true"></i></h2>
                  <div className="img">
                    <a href="https://github.com/trobe026/ATXNewScraper" target = '_blank' rel="noopener noreferrer"><img className="img-thumbnail" src="images/atxnews.jpeg" alt="Games"/></a>
                    <h4>MongoDB News Scraper</h4>
                  </div>
                  <div className="img">
                    <a href="https://public-brewery-app.herokuapp.com/" target = '_blank' rel="noopener noreferrer"><img className="img-thumbnail" src="images/public.jpeg" alt="Brew Explorer"/></a>
                    <h4>Brewery Explorer</h4>
                  </div>
                  <div className="img">
                    <a href="https://github.com/trobe026/InstruMemory" target = '_blank' rel="noopener noreferrer"><img className="img-thumbnail" src="images/instrumemory.jpeg" alt="Apps"/></a>
                    <h4>InstruMemory</h4>
                  </div>
                  <div className="img">
                    <a href="https://friend-finder-app-tr.herokuapp.com/" target = '_blank' rel="noopener noreferrer"><img className="img-thumbnail" src="images/ff.jpeg" alt="FriendFinder"/></a>
                    <h4>Friend Finder</h4>
                  </div>
                  <div className="img">
                    <a href="https://github.com/trobe026/Roost" target = '_blank' rel="noopener noreferrer"><img className="img-thumbnail" src="images/Roost.jpeg"  alt="Roost"/></a>
                    <h4>Roost</h4>
                  </div>
                  </section>
                </div>
            </div>
          </section>
    );
  }

}

export default Portfolio;
