import React, { Component } from 'react';
import HeaderNav from './headernav';
import Footer from './footer';
import './businessaccount.css';

class BusinessAccount extends Component {

  render() {
    return (
      
      <div>
      <HeaderNav />
            
    <div class="shopper">
      <h3>Create Business Account</h3>
      </div>
      <div class="container">
      <div class="row">
      <form class="col s12">
       <div class="input-field col s12">
      <i class="material-icons prefix">business_center</i>
          <input id="icon_prefix" type="text" class="validate"></input>
          <label for="icon_prefix">Official Business Name</label>
          </div>
          <div class="input-field col s12">
      <i class="material-icons prefix">email</i>
          <input id="icon_prefix" type="email" class="validate"></input>
          <label for="icon_prefix">Business Email Address</label>
          </div>
           <div class="input-field col s12">
          <i class="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" class="validate"></input>
          <label for="icon_telephone">Business Mobile Number</label>
        </div>
        <div class="input-field col s12">
          <i class="material-icons prefix">arrow_forward</i>
          <input id="icon_telephone" type="password" class="validate"></input>
          <label for="icon_telephone">Account Password</label>
        </div>
        <div class="shopper">
      <a class="waves-effect waves-light btn-large" >Click To Create Account</a>
      </div>
      </form>

      </div>
      </div>
            
    </div>
        
        
    );
  }
}

export default BusinessAccount;