import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Alert from './components/layout/Alert';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import User from './components/users/User';
import Users from './components/users/Users';
import './App.css';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/' render={() => (
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                )} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}


export default App;
