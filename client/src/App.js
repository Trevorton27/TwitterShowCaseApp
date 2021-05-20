import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Redirect } from 'react-router';
import './index.css';
import Random from './random';
import Search from './search';
import Home from './home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul className='nav nav-tabs justify-content-center'>
              <li className='nav-item'>
                <Link to='/' className='navLink'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/random' className='navLink'>
                  Random Tweet Finder
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/search' className='navLink'>
                  Search
                </Link>
              </li>
            </ul>

            <Route exact path='/' component={Home} />
            <Route exact path='/random' component={Random} />
            <Route exact path='/search' component={Search} />
          </div>
        </Router>
        <div className='card-footer text-center' style={{ marginTop: '2em' }}>
          <div className='card-body'>
            <p className='card-title1' id='para'>
              Psst. Click the button below to visit my personal website.
            </p>
            <a
              href='https://trevormearns.com/'
              type='button'
              className='btn1 btn-primary'
            >
              Click Me.
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
