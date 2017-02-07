import { Component } from 'react';
import React from 'react';
import { Link } from 'react-router';


class Header extends React.Component {


  render() {
    return (
          <div className='test'>
            <nav className='header-container'>

              <div className='left-side-header'>
                <Link to='/' id='name'><h1>Maia Stone</h1></Link>
              </div>

              <div className='right-side-header'>
                <ul>

                  <li className='navLi'>
                    <Link to='/'
                      className='nav'
                      activeClassName='active'>
                      Featured Work
                    </Link>
                  </li>

                  <li className='navLi'>
                    <Link to='/about'
                      className='nav'
                      activeClassName='active'>
                      About
                    </Link>
                  </li>
                </ul>
              </div>

            </nav>
            {this.props.children}
          </div>
    );
  }
}

module.exports = Header;
