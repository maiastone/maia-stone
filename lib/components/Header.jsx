import { Component } from 'react';
import React from 'react';
import { Link } from 'react-router';


class Header extends React.Component {


  render() {
    return (
          <div>
            <nav className='header-container'>
              <h1>Maia Stone</h1>
              <ul>
                <li className='navLi'><Link to='/' className='nav'>Home</Link></li>
                <li className='navLi'><Link to='/about' className='nav'>About</Link></li>
                <li className='navLi'><Link to='/contact' className='nav'>Contact</Link></li>
              </ul>
            </nav>
            {this.props.children}
          </div>
    );
  }
}

module.exports = Header;
