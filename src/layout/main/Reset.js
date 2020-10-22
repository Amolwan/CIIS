import React, { Component } from "react";
// import { Form } from 'semantic-ui-react'
import '../../styles/Reset.css';



export default class Reset extends Component {

    render() {
        return (
            <form>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                      <div>
                        <h1>Reset Password</h1>
                        <div className="under-register">
                          <p>Register on the platform </p>
                        </div>
                      </div>

                      <div class="form-row">
                        
                        <div class="form-group col-md-6">
                        <label for="inputpassword">Create Password *</label>
                        <input type="password" class="form-control" id="inputpassword" placeholder="ex.amolwan1234....."/>
                        </div>
                      </div>

                      
                      <div align="right"> 
                        <button type="submit" class="btn btn-secondary ">SUBMIT</button>
                      </div> 

                      {/* <p className="have-account">
                        You have an account? <a href="#">Sign In</a>
                      </p> */}

                      
     
                    </div>
                </div>
            </form>
        );
    }
}
