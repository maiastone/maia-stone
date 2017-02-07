import React, { Component } from 'react';


class Resume extends React.Component {


  render() {
    return (
      <div className='full resume card'>
        <header className='resume-header'>
          <h1>Maia Stone</h1>
          <p>Front End Developer</p>
        </header>
        <section className='contact-info'>
          <h2 className='resume-section-title'>Skills</h2>
          <h4>Languages & Frameworks</h4>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Redux</li>
            <li>Ember</li>
          </ul>
          <h4>Tools & Workflow</h4>
          <ul>
            <li>Webpack</li>
            <li>Github</li>
            <li>Sketch</li>
          </ul>
          <h4>TDD</h4>
          <ul>
            <li>Enzyme</li>
            <li>Jest</li>
            <li>Mocha</li>
            <li>Chai</li>
          </ul>
          <h4>Database & Other</h4>
          <ul>
            <li>Firebase</li>
            <li>Node</li>
            <li>Express</li>
            <li>SQL</li>
            <li>Knex</li>
            <li>JSON Web Tokens</li>
            <li>WebSockets</li>
          </ul>
        </section>

        <section className='experience'>
          <h2 className='resume-section-title'>Experience</h2>

          <h3>Turing School of Software & Design</h3>
          <div className='experience-header'>
            <h4>Front End Developer, Student</h4>
            <h4>2016 - Present</h4>
          </div>

          <h3>MindSpark, Inc.</h3>
          <div className='experience-header'>
            <h4>Founder, Executive Director</h4>
            <h4>2011 - Present</h4>
          </div>
          <p>Developed 38 programs to serve over 1,000 youth, in six schools and four libraries, over five years</p>
          <p>Engage and energize volunteers, board members, event committees, alumni, partnering organizations, and funders</p>

          <h3>MSW Financial Partners</h3>
          <div className='experience-header'>
            <h4>Controller</h4>
            <h4>2011 - Present</h4>
          </div>
          <p>Maintain QuickBooks and financial statements for rental properties, commission income and expenses</p>
          <p>Manage FINRA and SEC compliance</p>

          <h3>Tax Analyst & Consultant</h3>

          <div className='experience-header'>
            <h4>Great-West Life & Annuity Insurance Company</h4>
            <h4>2010 - 2011</h4>
          </div>
          <p>Preparation of quarterly tax provisions, tax basis balance sheets, deferred tax roll-forward, current tax payable account validation, and annual returns.</p>

          <div className='experience-header'>
            <h4>Deloitte Tax LLP</h4>
            <h4>2009 - 2010</h4>
          </div>
          <p>Preparation of tax returns for individuals, trusts, gift and estate tax returns, partnerships, and foundations.</p>

          <h3>Hospitality Managment, Event Planning & Production</h3>
          <p>More than a decade of progressive hospitality experience highlighted by experience with Disney World, Hyatt, and Marriott</p>
          <div className='experience-header'>
            <h4>Denver Startup Week, Basecamp</h4>
            <h4>2014</h4>
          </div>
          <p>Basecamp was host to 6,000 attendees, 40 separate events</p>
          <div className='experience-header'>
            <h4>STEMosphere, Share Fair</h4>
            <h4>2013</h4>
          </div>
          <p>An educational and professional developement exhibition with 5,000 attendees, 40 hands-on exhibitors</p>
        </section>

        <section className='volunteer'>
          <h2 className='resume-section-title'>Volunteer</h2>
          <p>Over 10 years of volunteer service on boards, grant making teams, event-planning teams, and fundraising committees.  </p>
        </section>

        <section className='education'>
          <h2 className='resume-section-title'>Education & Certification</h2>
          <div className='experience-header'>
            <h4>Master of Taxation</h4>
            <h4>University of Denver</h4>
          </div>
          <div className='experience-header'>
            <h4>MBA - Real Estate</h4>
            <h4>University of Denver</h4>
          </div>
          <div className='experience-header'>
            <h4>BA - Photography</h4>
            <h4>University of New Mexico</h4>
          </div>
          <div className='experience-header'>
            <h4>CPA</h4>
            <h4>2011</h4>
          </div>

        </section>
      </div>
    );
  }
}

module.exports = Resume;
