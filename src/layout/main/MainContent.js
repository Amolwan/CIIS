import React from 'react';
import Status from './Status'
import Checkpayment from './Checkpayment'
import Allresearch from './Allresearch'
import Total from './Total'
import Paypal from './Paypal'
import TMB from './TMB'
import Unpaid from './Unpaid'
import Edit from './Edit'
import Reset from './Reset'
import Signout from './Signout'
import reactLogo from '../../images/head.png'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBarMenu from '../sidebar/SideBarMenu';

function MainContent() {

    return (
        <main class="page-content">
          <SideBarMenu/>
          <img src={reactLogo} alt="React logo" width="100%" />
            <Router>
        <Switch>
          <Route path='/Status' component={Status} />
          <Route path='/Checkpayment' exact component={Checkpayment } />
          <Route path='/Allresearch' component={Allresearch} />
          <Route path='/Total' component={Total} />
          <Route path='/Paypal' component={Paypal} />
          <Route path='/TMB' component={TMB} />
          <Route path='/Unpaid' exact component={Unpaid } />
          <Route path='/Edit' exact component={Edit } />
          <Route path='/Reset' exact component={Reset } />
          <Route path='/Signout' exact component={Signout } />
          
        </Switch>
      </Router>
        </main>

    )
}

export default MainContent;

