import React, { Component } from 'react';
import Checkpayment from './Checkpayment'
import Allresearch from './Allresearch'
import Total from './Total'
import Paypal from './Paypal'
import TMB from './TMB'
import Unpaid from './Unpaid'
import Edit from './Edit'
import Reset from './Reset'
import Signout from './Signout'
import Data from './Data'
import reactLogo from '../../images/head.png'

import Home from './Home'

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from './login';

import Status from './Status';
import { auth } from '../../services/firebase';

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
        });
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
          <PrivateRoute path="/Home" authenticated={this.state.authenticated} component={Home}></PrivateRoute>
        </Switch>

      </Router>
    );
  }
}

export default MainContent;
