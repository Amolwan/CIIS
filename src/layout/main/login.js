/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import '../../styles/login.css';
import user from '../../images/user.png'
import './Status'
import './MainContent'
import { signin } from '../../helpers/auth';

export default class Login extends Component {

    constructor() {
      super();
      this.state = {
        error: null,
        email: '',
        password: '',
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  
    async handleSubmit(event) {
      event.preventDefault();
      this.setState({ error: '' });
      try {
        await signin(this.state.email, this.state.password);
      } catch (error) {
        this.setState({ error: error.message });
      }
    }
  
    render() {
        return (
            <form autoComplete="off" onSubmit={this.handleSubmit}>
                <div className="auth-wrapper-log">
                    <div className="auth-inner-log">
                        <div class="text-center">
                            <img src={user} width="70px" /> 
                        </div>
                        <div className="textlog">
                            <p>LOGIN</p>
                        </div>
                        
                        <div className="form-group1">
                            <label>Email or Username *</label>
                        </div>
                        
                        <input className="form-control1" placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}></input>
                        

                        <div className="form-group1">
                            <label>Password *</label>
                        </div>
                        
                        <input className="form-control1" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password"></input>
                        

                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>

                        <div className="form-group1">
            {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
            <button className="btn1 btn-secondary">Login</button>
          </div>

                            <p className="dont-have-account">
                                Don't have account? <a href="#">Register</a>
                            </p>
                    </div>
                </div>
            </form>
        );
    }
}