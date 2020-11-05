import React, { Component } from "react";
// import { Form } from 'semantic-ui-react'
import '../../styles/Reset.css';
import firebase from 'firebase'
import reactLogo from '../../images/head.png';
import SideBarMenu from '../sidebar/SideBarMenu';
import { auth } from '../../services/firebase';


const reset = (props) => {
  

  const handleResetPassword = (email) =>{
    console.log(auth().currentUser.email)
    
    firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
    .then(function (user) {
      alert('Please check your email...')
    }).catch(function (e) {
      console.log(e)
    })
  }


    
        return (
          <div  class="page-content">
          <SideBarMenu/>
         <img src={reactLogo} alt="React logo" width="100%" />
          
          <button onClick={handleResetPassword}>reset </button>
          </div>
            
        );
    
}
export default reset;
