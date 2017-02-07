/* eslint-disable */
import React from 'react';
import Header from './Header.jsx';
import Resume from './Resume.jsx';
import { Link } from 'react-router';



const About = () => {
  return (
    <div className="About">

      <section className="full card">
          <p>
            I've taken the road less traveled, as an entrepreneur, but I've also climbed the corporate ladder. I{"'"}ve <span>built a company</span> from the ground up. My husband and I <span>built our house</span> from the ground up.  Experienced in working alone and making every decision, I've also enjoyed the pleasure of working with and leading <span>highly functional teams</span>.
          </p>
          <p>
            One of my greatest joys is to see that magic glow in a child's eye. The best twinkles are of course <span>my two kids radiant eyes staring back at me</span> and pushing me to be a better person, and a role model. When I'm not writing code, you can find me in the yard with my family, and two high energy, Spanish Water Dogs. We relax in the <span>mountains</span>, and travel as much as possible. I love yoga, knitting, sewing, and photography.
          </p>
      </section>
      <Resume />
    </div>
  );
};

export default About;
