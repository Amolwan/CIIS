import React, { Component } from "react";
import '../../styles/login.css';
import userImg from "../../images/user.png";

export default class Login extends Component {
    render() {
        return (
            <form>
                <div className="auth-wrapper-log">
                    <div className="auth-inner-log">
                        <div class="text-center">
                            <img src= {userImg} width="70px" /> 
                        </div>
                        <div className="textlog">
                            <p>LOGIN</p>
                        </div>
                        
                        <div className="form-group1">
                            <label>Email*</label>
                        </div>
                        
                            <input type="email" className="form-control1" placeholder="email" />
                        

                        <div className="form-group1">
                            <label>Password *</label>
                        </div>
                        
                            <input type="password" className="form-control1" placeholder="password" />
                        

                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>

                        
                            <button type="button"i class="btn1 btn-secondary ">SIGN IN</button>
                        

                            <p className="dont-have-account">
                                Don't have account? <a href="#">Register</a>
                            </p>
                    </div>
                </div>
            </form>
        );
    }
}