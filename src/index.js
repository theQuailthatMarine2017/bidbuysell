import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Accounts from './components/accounts';
import ProductsList from './components/mainapp';
import Login from './components/login';
import ShopperAccount from './components/shopperaccount';
import BusinessAccount from './components/businessaccount';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import * as serviceWorker from './serviceWorker';


const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/accounts" component={Accounts} />
      <Route path="/shopperaccount" component={ShopperAccount} />
      <Route path="/businessaccount" component={BusinessAccount} />
      <Route path="/login" component={Login} />
      <Route path="/mainapp" component={ProductsList} />
    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
