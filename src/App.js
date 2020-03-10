import React, { Component } from 'react';
import HeaderNav from './components/headernav';
import Footer from './components/footer';
import WelcomeContent from './components/welcome';

class App extends Component {
  render() {
    return (
      <div>
      <HeaderNav />
      <WelcomeContent />
      <Footer />
      </div>
    );
  }
}

export default App;
