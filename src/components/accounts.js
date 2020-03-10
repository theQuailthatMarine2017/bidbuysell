import React, { Component } from 'react';
import HeaderNav from './headernav';
import Footer from './footer';
import './accounts.css';

class Account extends Component {

  render() {
    return (
      
      <div>
      <HeaderNav />
            <div class="container">
            <div class="welcome">
      
      <h2>You Can Create Shopper / Business Account or Login Into Account</h2>

    <div class="row">

    
      <div class="col s12"><div class="button"><a class="waves-effect waves-light btn-large" href="shopperaccount"><i class="material-icons left">add_shopping_cart</i>Create Shopper Account</a></div></div>
     
      <div class="col s12"><div class="button1"><a class="waves-effect waves-light btn-large" href="businessaccount"><i class="material-icons left">account_balance</i>Create Business Account</a></div></div>
      <div class="col s12"><a class="waves-effect waves-light btn-large" href="login"><i class="material-icons left">exit_to_app</i>Log Into Account</a></div>


    </div>
          
     </div>
    
    </div>
    <Footer />
    </div>
        
        
    );
  }
}

export default Account;