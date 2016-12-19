import { Component } from 'react';
import React from 'react';
import { Link } from 'react-router';


class Header extends React.Component {


  render() {
    return (
          <div className="header-container">

            <header className='small-header-container'>
              <button className="menu-btn rotate"></button>
              <h1>Maia Stone</h1>
            </header>

            <nav className='small-header-container'>
              <ul>
                <li className='navLi'><Link to='/' className='nav'>Home</Link></li>
                <li className='navLi'><Link to='/About' className='nav'>About</Link></li>
                <li className='navLi'><Link to='/Contact' className='nav'>Contact</Link></li>
              </ul>
            </nav>

          </div>
    );
  }
}

module.exports = Header;
