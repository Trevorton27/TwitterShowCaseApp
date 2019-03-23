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
  return(
  <div>
  <Router>
    
      <div>
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/random">Random Tweet Finder</Link>
          </li>
          <li className="nav-item">
            <Link to="/search">Search</Link>
          </li>
        </ul>
        <Route path="/home" component={Home} />
        <Route path="/random" component={Random} />
        <Route path="/search" component={Search} />
        <Redirect from="/" to="/home" />
      </div>
      </Router>
      <div className="card-footer text-center">
                <div className="card-body">
                  <p className="card-title1" id="para">Psst. Click the button below to visit my personal website.</p>
                  <a href="https://trevormearns.com/" type="button" className="btn1 btn-primary">Click Me.</a>
                </div>      
              </div>
          </div>
  );
}
}


export default App;