// import React, { Component } from 'react';

import { signup } from '../../helpers/auth';

import React, { Component } from "react";
// import { Form } from 'semantic-ui-react'
import '../../styles/register.css';
import reactLogo from '../../images/head.png'
import SideBarMenu from '../sidebar/SideBarMenu';
import { auth,db } from '../../services/firebase';
import firebase from 'firebase';

export default class Register extends Component {
    
    constructor() {
        super();
        this.state = {
          name: "",
          email: "",
          password: "",
          uid: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
      }
      handleSubmit(event) {
        var user = firebase.auth().currentUser;
        try {
            if (1) {
              
              firebase
                .auth()
                .createUserWithEmailAndPassword(
                  this.state.email,
                  this.state.password
                )
                .then(async (user) => {
                  console.log(user.user.uid);
                  await this.setState({
                    uid: user.user.uid,
                  });
                })
                .then(() => {
                  console.log(this.state.uid);
                  firebase
                    .database()
                    .ref("User")
                    .child(this.state.uid)
                    .set({
                      name: this.state.name,
                      email: this.state.email,
                      is_admin: "",

                    });
                  alert("สำเร็จ !");
                })
                .catch((error) => {
                  // Handle Errors here.
                  alert(error);
                });
            }
        } catch (err) {
          alert(err);
        }
        event.preventDefault();
      }
    
  
  render() {
    return (
      <div class="page-content">
       <SideBarMenu/>
      <img src={reactLogo} alt="React logo" width="100%" />
        <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="auth-wrapper">
                <div className="auth-inner">
                  <div>
                    <h1>Register</h1>
                    <div className="under-register">
                      <p>Register on the platform </p>
                    </div>
                  </div>

             


                  <div class="form-row">
                    <div class="form-group col-md-6 ">
                      <label for="input-email">Email *</label>
                      <input className="form-control" placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}></input>
                    </div>


                    
                  </div>


                  <div class="form-group">
                  <label for="inputpassword">Password *</label>
                  <input className="form-control" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password"></input>
                  </div>
                 

          
              <div class="form-group ">
                <label for="name">
                  Name <span>*</span>
                </label>
                <input
                  className="form-control"
                  placeholder=" "
                  onChange={this.handleChange}
                  name="name"
                  type="name"
                />
              
            </div>


                  
                  <div align="right"> 
                
             {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
             <button className="btn btn-secondary ">SUBMIT</button>
          </div>


                  
                </div>
            </div>
        </form>
        </div>
    );
}
}


