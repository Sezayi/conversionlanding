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
          <Row around="xs">
              <Row xs={1} center="xs" middle="xs">
                <Col xs={12}>
                    <img src={Ebook} width="50%" alt="ebook"/>
                </Col>
              </Row>
              <Row xs={1}>
                <Col xs={12} >           
                    <Route exact path="/" component={SignUpForm}>
                    </Route>
                    <Route path="/thankyou" component={ThankYou}>
                    </Route>
                </Col>
              </Row>
          </Row>
        </Grid>
      </Router>
    );
  }
}

export default App;
