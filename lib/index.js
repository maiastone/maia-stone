const React = require('react');
const ReactDOM = require('react-dom');
import Portfolio from '../lib/components/Portfolio.jsx';
import About from '../lib/components/About.jsx';
import Contact from '../lib/components/Contact.jsx';
import Resume from '../lib/components/Resume.jsx';
import Header from '../lib/components/Header.jsx';

import '../lib/styles/main.scss';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={Header} >
          <IndexRoute component={Portfolio} />
          <Route path='about' component={About} />
          <Route path='contact' component={Contact} />
        </Route>
    </Router>

, document.querySelector('.application'));
