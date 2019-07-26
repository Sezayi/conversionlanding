import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import Ebook from './images/ebook.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div className="App">
          <div className="App__Form">
              <Route exact path="/" component={SignUpForm}>
              </Route>
          </div>
          <div className="App__Aside">
            <div className="ImageWrapper">
            <img className="ImageStyle" src={Ebook} alt="ebook"/>
            </div>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
