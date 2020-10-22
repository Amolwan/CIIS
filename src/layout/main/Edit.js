import React, { Component } from "react";
// import { Form } from 'semantic-ui-react'
import '../../styles/Edit.css';

export default class Edit extends Component {
  render() {
    return (
        <form>
            <div className="auth-wrapper">
                <div className="auth-inner">
                  <div>
                    <h1>Register</h1>
                    <div className="under-register">
                      <p>Register on the platform </p>
                    </div>
                  </div>

                  <div class="form-row">
                  <div class="form-group col-md-6">
                      <label for="first-name">First Name *</label>
                      <input type="first-name" class="form-control" id="first-name" placeholder="Your First-Name - ex.Chalinee......" />
                    </div>
                    {/* <div class="form-group col-md-6">
                      <label for="id">ID Card / Passport No. *</label>
                      <input type="id" class="form-control" id="id" placeholder="ex.1103702411xxx....."/>
                    </div>  */}
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="last-name">Last Name *</label>
                      <input type="last-name" class="form-control" id="last-name" placeholder="Your Last-Name - ex.Pisuttipaisan ......"/>
                    </div>
                    {/* <div class="form-group col-md-6">

                      
                    </div> */}
                  </div>


                  <div class="form-row">
                    <div class="form-group col-md-6 ">
                      <label for="input-email">Email *</label>
                      <input type="email" class="form-control" id="input-email" placeholder="Email" />
                    </div>


                    
                  </div>


                  <div class="form-group">
                  <label for="inputpassword">Create Password *</label>
                    <input type="password" class="form-control" id="inputpassword" placeholder="ex.Amolwan1234....."/>
                  </div>
                  {/* <div class="form-group">
                  </div> */}


                  
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

