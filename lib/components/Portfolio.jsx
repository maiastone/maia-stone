import React, { Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ProjectContainer from './ProjectContainer.jsx';

class Portfolio extends React.Component {


  render() {
    return (
      <div className="page-container">
        <Header />
        <ProjectContainer />
        <Footer />
      </div>
    );
  }
}

module.exports = Portfolio;
