const React = require('react');


const Footer = (props) => (
  <footer>
       <a href="https://www.linkedin.com/in/maiastone/">
         <img src='./lib/styles/images/linkedin.svg'/>
       </a>

       <a href="mailto:maiadov@gmail.com?Subject=Connect" target="_top">
         <img src='./lib/styles/images/mail.svg'/>
       </a>

       <a href="https://twitter.com/maiadov">
         <img src='./lib/styles/images/twitter.svg'/>
       </a>

       <a href="https://github.com/maiastone">
         <img src='./lib/styles/images/github.svg'/>
       </a>
  </footer>
);

module.exports = Footer;
