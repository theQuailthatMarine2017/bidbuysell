import React, { Component } from 'react';
import HeaderNav from './headernav';
import Footer from './footer';
import './mainapp.css';

class ProductsList extends Component {

  render() {
    return (
      
      <div>
      <HeaderNav />

      <div class="container">

      <div class="row">
    <div class="col s12 m3">
      <div class="card">
        <div class="card-image">
          <img src="shoe.jpeg"></img>
          <span class="card-title">Card Title</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p>KSH 2,500.</p>
          <p>Milimani Fashions </p>
          <p>Available</p>
        </div>
      </div>

    </div>
     <div class="col s12 m3">
      <div class="card">
        <div class="card-image">
          <img src="shoe.jpeg"></img>
          <span class="card-title">Card Title</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p>KSH 2,500.</p>
          <p>Milimani Fashions </p>
          <p>Available</p>
        </div>
      </div>
      
    </div>

    <div class="col s12 m3">
      <div class="card">
        <div class="card-image">
          <img src="shoe.jpeg"></img>
          <span class="card-title">Card Title</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p>KSH 2,500.</p>
          <p>Milimani Fashions </p>
          <p>Available</p>
        </div>
      </div>
      
    </div>


  </div>

      </div>


    
      
        
    </div>
        
        
    );
  }
}

export default ProductsList;