import React, { Component } from 'react';
import firebase from 'firebase'
import firebaseConfig from '../fire';

class SignUpForm extends Component {
    constructor() {
        super();

        firebase.initializeApp(firebaseConfig);

        this.state = {
            email: '',
            name: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.inputNameRef = React.createRef()
    }


    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const usersRef = firebase.database().ref('users');
        const user = {
          email: this.state.email,
          name: this.state.name,
        }
        usersRef.push(user, ()=> {
          this.props.history.push('/thankyou');
        });
        this.setState({
          email: '',
          name: ''
        });
    }


    componentDidMount() {
      this.inputNameRef.current.focus()
    }


    render() {
        return (
        <div className="FormCenter">
            <div className="FormSubHeaderTitle">Download it for free</div>
            <div className="FormHeaderTitle"> The SME purpose Ebook</div>
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input ref={this.inputNameRef} type="text" id="name" className="FormField__Input" placeholder="John Good" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Your work e-mail</label>
                <input type="email" id="email" className="FormField__Input" placeholder="you@yourwork.com" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" required={true} value={this.state.hasAgreed} onChange={this.handleChange} /> I agree to all statements in the <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                  <button className="FormField__Button">Download E-book</button>
              </div>
            </form>
          </div>
        );
    }
}

export default SignUpForm;
