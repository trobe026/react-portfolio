import React from "react";
import './Nav.css';

const Nav = () => (
  <header className='navbar navbar-static-top'>
    <nav className='container'>
          <div className='navbar-header'>
            <a href='/' className='navbar-brand'>Travis Roberts</a>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='.navbar-collapse'>
                <span className='sr-only'>Toggle navigation</span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
            </button>
          </div>

          <ul className='nav navbar-nav navbar-right collapse navbar-collapse'>
            <li><a href='/'>About</a></li>
            <li><a href='/portfolio'>Portfolio</a></li>
            <li><a href='/contact'>Contact</a></li>
            <li><a href="https://github.com/trobe026"><i className="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/in/travis-roberts-b2580711b/"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="https://stackoverflow.com/users/8223810/travis-roberts"><i className="fab fa-stack-overflow"></i></a></li>
          </ul>
    </nav>
  </header>
);

export default Nav;
