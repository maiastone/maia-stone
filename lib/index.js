const React = require('react');
const ReactDOM = require('react-dom');
import Portfolio from '../lib/components/Portfolio.jsx';
import About from '../lib/components/About.jsx';
import Header from '../lib/components/Header.jsx';
import Footer from '../lib/components/Footer.jsx';

import '../lib/styles/main.scss';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={Header} >
          <IndexRoute component={Portfolio} />
          <Route path='about' component={About} />
        </Route>
        <Route path='/' component={Footer} />
    </Router>

, document.querySelector('.application'));
