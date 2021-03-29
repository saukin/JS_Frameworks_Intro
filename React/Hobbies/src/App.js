import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import User from './components/User';
import Account from './components/Account';
import Mail from './components/Mail';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/account'>Account</Link>
          <Link to='/mail'>Mail</Link>
        </div>

        <hr />

        <div>
          <Route exact path='/' component={User} />
          <Route exact path='/account' component={Account} />
          <Route exact path='/mail' component={Mail} />
        </div>
      </Router>
    );
  }

}

export default App;
