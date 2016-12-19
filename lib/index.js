const React = require('react');
const ReactDOM = require('react-dom');
import Portfolio from '../lib/components/Portfolio.jsx';
import About from '../lib/components/About.jsx';
import Contact from '../lib/components/Contact.jsx';


import '../lib/styles/main.scss';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Portfolio} />
        <Route path='about' >
          <IndexRoute component={About} />
        </Route>
        <Route path='contact' >
          <IndexRoute component={Contact} />
        </Route>
    </Router>

, document.querySelector('.application'));
