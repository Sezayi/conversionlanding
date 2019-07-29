import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import ThankYou from './components/ThankYou';
import Ebook from './images/ebook.png';
import './App.css';
import { Grid, Row, Col} from 'react-flexbox-grid';

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <Grid fluid>
            <Row>
                  <div className="ImageWrapper">
                  <img className="ImageStyle" src={Ebook} alt="ebook"/>
                  </div>   
            </Row>
            <Row>
                  <Route exact path="/" component={SignUpForm}>
                  </Route>
                  <Route path="/thankyou" component={ThankYou}>
                  </Route>
            </Row>
          </Grid>
      </Router>
    );
  }
}

export default App;
