import React, { Component } from "react";
import './Portfolio.css';

export default class Portfolio extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>
            <div className="row well well-lg justify-content-center container-fluid">
                <section>
                  <h2>Portfolio</h2>
                    <a className='img' href="https://github.com/trobe026/Roost" target = '_blank' rel="noopener noreferrer"><img className="img-thumbnail" src="images/Roost.jpeg"  alt="Roost"/><h4>Roost</h4></a>
                    <a className='img' href="https://github.com/trobe026/ATXNewScraper" target = '_blank' rel="noopener noreferrer"><img className="img-thumbnail" src="images/atxnews.jpeg" alt="Games"/><h4>MongoDB News Scraper</h4></a>
                    <a className='img' href="https://public-brewery-app.herokuapp.com/" target = '_blank' rel="noopener noreferrer"><img className="img-thumbnail" src="images/public.jpeg" alt="Brew Explorer"/><h4>Brewery Explorer</h4></a>
                    <a className='img' href="https://github.com/trobe026/InstruMemory" target = '_blank' rel="noopener noreferrer"><img className="img-thumbnail" src="images/instrumemory.jpeg" alt="Apps"/><h4>InstruMemory</h4></a>
                    <a className='img' href="https://friend-finder-app-tr.herokuapp.com/" target = '_blank' rel="noopener noreferrer"><img className="img-thumbnail" src="images/ff.jpeg" alt="FriendFinder"/><h4>Friend Finder</h4></a>
                    <a className='img' href='https://github.com/trobe026/sequelizedBurger' target = '_blank' rel="noopener noreferrer"><img className="img-thumbnail" src="images/burger.jpeg" alt="Sequelized Burger"/><h4>Sequelized Burger</h4></a>
                  </section>
              </div>
          </section>
    );
  }

}
