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
import Login from './Login'

import Status from './Status';
import Signout from './Signout';
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
          <Route path='/Status' component={Status} />
          <Route path='/Checkpayment' exact component={Checkpayment } />
          <Route path='/Allresearch' component={Allresearch} />
          <Route path='/Total' component={Total} />
          <Route path='/Paypal' component={Paypal} />
          <Route path='/TMB' component={TMB} />
          <Route path='/Unpaid' exact component={Unpaid } />
          <Route path='/Data' component={Data} />
          <Route path='/Edit' exact component={Edit } />
          <Route path='/Reset' exact component={Reset } />
          <Route path='/Signout' exact component={Signout } />
          <Route path='/Login' exact component={Login } />
        </Switch>

      </Router>
    );
  }
}

export default MainContent;
