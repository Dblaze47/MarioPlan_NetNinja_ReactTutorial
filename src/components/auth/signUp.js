import React, { Component } from 'react'

export default class SignUp extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }
    handleSubmit = (e)=> {
        e.preventDefault();
        console.log(this.state);
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.id]: e.target.value 
        });
    }
    render() {
    return (
      <div className="conainer sign-up">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign Up</h5>
            <div className="input-field">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <label htmlFor="lastName">Email</label>
                <input type="text" id="lastName" onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input autoComplete="on" type="password" id="password" onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <label htmlFor="confirmPassword">Confirm password</label>
                <input autoComplete="on" type="password" id="confirmPassword" onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <button className="btn red lighten-1 z-depth-0">Sign Up</button>
            </div>
        </form>
      </div>
    )
  }
}