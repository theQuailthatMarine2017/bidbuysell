import React, { Component } from 'react';
import HeaderNav from './headernav';
import Footer from './footer';
import './login.css';

class Login extends Component {

  render() {
    return (
      
      <div>
      <HeaderNav />
      <div class="shopper">
      <h3>Login To Acccount</h3>
      </div>
      <div class="container">
      <div class="row">
      <form class="col s12">
      
          <div class="input-field col s12">
      <i class="material-icons prefix">email</i>
          <input id="icon_prefix" type="email" class="validate"></input>
          <label for="icon_prefix">Email Address</label>
          </div>
          
        <div class="input-field col s12">
          <i class="material-icons prefix">arrow_forward</i>
          <input id="icon_telephone" type="password" class="validate"></input>
          <label for="icon_telephone">Password</label>
        </div>
        <div class="shopper">
      <a class="waves-effect waves-light btn-large" >login</a>
      </div>
      </form>

      </div>
      </div>
            
    </div>
        
        
    );
  }
}

export default Login;