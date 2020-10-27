import React from 'react';
import Status from './Status'
import Checkpayment from './Checkpayment'
import Allresearch from './Allresearch'
import Total from './Total'
import Paypal from './Paypal'
import TMB from './TMB'
import Unpaid from './Unpaid'
import Edit from './Edit'
import Signout from './Signout'

import login from './login'

import reactLogo from '../../images/head.png'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBarMenu from '../sidebar/SideBarMenu';

function MainContent() {

    return (
        <main class="page-content">
            <Router>
        <Switch>
          <Route exact path = '/' component = {login} />
          <Route path='/Status' component={Status} />
          <Route path='/Checkpayment' component={Checkpayment } />
          <Route path='/Allresearch' component={Allresearch} />
          <Route path='/Total' component={Total} />
          <Route path='/Paypal' component={Paypal} />
          <Route path='/TMB' component={TMB} />
          <Route path='/Unpaid' component={Unpaid } />
          <Route path='/Edit' component={Edit } />
          <Route path='/Signout' component={Signout } />
          
        </Switch>
      </Router>
        </main>

    )
}

export default MainContent;

