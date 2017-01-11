/* eslint-disable */
import React from 'react';
import Header from './Header.jsx';
import { Link } from 'react-router';



const About = () => {
  return (
    <div className="About">
        <blockquote className='tagline'>
          Usually the same things that get me up in the morning, keep me up at night.
          <br/>
        </blockquote>
        <p className='resume-link'>
          <a href='./lib/styles/images/maia-stone.pdf' className='resume-button'>view resume</a>
        </p>
      <section className="full card">
          <div className='story-header'>
            <img className='story' src="./lib/styles/images/136-zoom-in.svg"></img>
            <h1 className="font">The details</h1>
          </div>
          <p>It's the satisfaction from finding the missing semicolon, or the penny that ties out the financial statements.  It{"'"}s the complicated process required to setup a code base, or a chart of accounts.  It all stems from a solid comprehension of the big picture, but a willingness to dig deep and apply a technical skill to solve a problem.</p>

          <div className='story-header'>
            <img className='story' src="./lib/styles/images/223-man-woman.svg"></img>
            <h1 className="font">The people.</h1>
          </div>
          <p>Beyond the code, it's about creating remarkable and smooth digital experiences for intentional user groups.  It{"'"}s not unlike making financial maintenance easier for people by providing clear, concise, financially accurate data.</p>

          <div className='story-header'>
            <img className='story' src="./lib/styles/images/176-airplane.svg"></img>
            <h1 className="font">The journey.</h1>
          </div>
          <p>
            I've taken the road less traveled, as an entrepreneur, but I've also climbed the corporate ladder.  I{"'"}ve built a company from the ground up.  My husband and I built our house from the ground up.  Experienced in working alone and making every decision, but have had the pleasure of working with and leading highly functional teams.
          </p>

          <div className='story-header'>
            <img className='story' src="./lib/styles/images/490-svg.svg"></img>
            <h1 className="font">The spark.</h1>
          </div>
          <p>
            One of the greatest joys is to see that magic glow in a child's eye.  The best twinkles are of course my own two kids radiant eyes staring back at me and pushing me to be a better person, and a role model.  The nonprofit I cofounded, MindSpark, which has been running tinkering programs in schools and libraries for over five years, also strives to ignite an intellectual spark in kids ages 5-15.
          </p>

          <div className='story-header'>
            <img className='story' src="./lib/styles/images/232-wink.svg"></img>
            <h1 className="font">The fun.</h1>
          </div>
          <p>When I'm not writing code, you can find me in the yard with my family, and two high energy, Spanish Water Dogs.  We relax in the moutains, and travel as much as we can.  I love yoga, knitting, sewing, and photography.
          </p>
      </section>
    </div>
  );
};

export default About;
