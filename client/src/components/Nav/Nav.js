import React from "react";
import './Nav.css';

const Nav = () => (

  <header className='navbar navbar-static-top'>
    <div className='col-sm-4'>
          <div className='navbar-header'>
              <a href='/' className='navbar-brand'>Travis Roberts</a>
              <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='.navbar-collapse'>
                  <span className='sr-only'>Toggle navigation</span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
              </button>
            </div>
            </div>
            <div className='col-sm-8'>
              <ul className='nav navbar-nav navbar-left collapse navbar-collapse'>
                <li className='links'><a href='/'>About</a></li>
                <li className='links'><a href='/portfolio'>Portfolio</a></li>
                <li className='links'><a href='/contact'>Contact</a></li>
                </ul>
                <ul className='nav navbar-nav navbar-right collapse navbar-collapse'>
                <li><a href="https://github.com/trobe026"><i className="fab fa-github"></i></a></li>
                <li><a href="https://linkedin.com/in/travis-roberts-b2580711b/"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="https://stackoverflow.com/users/8223810/travis-roberts"><i className="fab fa-stack-overflow"></i></a></li>
              </ul>
            </div>
  </header>


);

export default Nav;
