import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class ThankYou extends Component {
 
    render() {
        return (
        <div className="ThankYouWrapper">
            <div className="ThankYouBox">
            <h1>Enjoy your read!</h1>
            <h2>For more interesting reads on purpose go to:</h2>
            <a target="_blank" href="https://www.goodup.com/inspire-me">www.goodup.com/inspire-me</a>
            </div>
          </div>
        );
    }
}

export default ThankYou;
