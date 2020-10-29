import React, { Component } from "react";
import '../../styles/login.css';
import user from '../../images/user.png'
import { Link } from 'react-router-dom';
import './Status'
import './MainContent'

export default class Login extends Component {
    render() {
        return (
            <form>
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
                        
                            <input type="email" className="form-control1" placeholder="email" />
                        

                        <div className="form-group1">
                            <label>Password *</label>
                        </div>
                        
                            <input type="password" className="form-control1" placeholder="password" />
                        

                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>

                        <Link to="/Status">
                            <button type="button" class="btn1 btn-secondary ">SIGN IN</button>
                        </Link>

                            <p className="dont-have-account">
                                Don't have account? <a href="#">Register</a>
                            </p>
                    </div>
                </div>
            </form>
        );
    }
}