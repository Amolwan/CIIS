import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from './login';
import React, { Component } from 'react';
import Checkpayment from './Checkpayment'
import Allresearch from './Allresearch'
import Total from './Total'
import Paypal from './Paypal'
import TMB from './TMB'
import Unpaid from './Unpaid'
import Edit from './Edit'
import Home from './Home'
import Status from './Status';
import Signout from './Signout';
import { auth,db } from '../../services/firebase';

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}
export async function CheckStatus(){
  return new Promise((resolve,reject)=>{
      let uid = auth().currentUser.uid;
      let bool = false;
      var ref =  db.ref("Admin/");
      ref.once("value").then(async function(snapshot) {
        await snapshot.forEach( function(snap) {
        
          if(uid === snap.key)
          {
            bool =  true;
            console.log(uid);
            console.log(snap.key)
            resolve(bool);
          }
      })
    });
    reject(bool);
  })
}
function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === false
        ? <Component {...props} />
        : <Redirect to='/Status' />}
    />
  )
}
class MainContent extends Component {

  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true,
    
    };
  }


  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
      
        })
      } else {
        this.setState({
          authenticated: false,
          loading: false,
        });
      }
    })
  }
 
  render() {
    return this.state.loading === true ? <h2>Loading...</h2> : (

        <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <PrivateRoute path="/Status" authenticated={this.state.authenticated} component={Status}></PrivateRoute>
          <PrivateRoute path="/Checkpayment" authenticated={this.state.authenticated} component={Checkpayment}></PrivateRoute>
          <PrivateRoute path="/Allresearch" authenticated={this.state.authenticated} component={Allresearch}></PrivateRoute>
          <PrivateRoute path="/Total" authenticated={this.state.authenticated} component={Total}></PrivateRoute>
          <PrivateRoute path="/Paypal" authenticated={this.state.authenticated} component={Paypal}></PrivateRoute>
          <PrivateRoute path="/TMB" authenticated={this.state.authenticated} component={TMB}></PrivateRoute>
          <PrivateRoute path="/Unpaid" authenticated={this.state.authenticated} component={Unpaid}></PrivateRoute>
          <PrivateRoute path="/Edit" authenticated={this.state.authenticated} component={Edit}></PrivateRoute>
          <PublicRoute path="/login" authenticated={this.state.authenticated} component={Login}></PublicRoute>
          <PrivateRoute path="/Signout" authenticated={this.state.authenticated} component={Signout}></PrivateRoute>
          <PublicRoute path="/Home" authenticated={this.state.authenticated} component={Home}></PublicRoute>        </Switch>

      </Router>
    );
  }
}

export default MainContent;
