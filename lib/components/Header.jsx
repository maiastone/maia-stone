import { Component } from 'react';
import React from 'react';
import { Link } from 'react-router';


class Header extends React.Component {


  render() {
    return (
          <div className='test'>
            <nav className='header-container'>
              <Link to='/' id='name'><h1>Maia Stone</h1></Link>
              <ul>
                <li className='navLi'><Link to='/' className='nav'>Featured Work</Link></li>
                <li className='navLi'><Link to='/about' className='nav'>About</Link></li>
              </ul>
            </nav>
            {this.props.children}
          </div>
    );
  }
}

module.exports = Header;
