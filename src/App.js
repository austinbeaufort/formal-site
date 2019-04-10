import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';
import InputCards from './Main/InputCards/InputCards';
import Footer from './Footer/Footer';
import HowItWorks from './Header/HowItWorks/HowItWorks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <HowItWorks/>
        <InputCards/>
        <Footer />
      </div>
    );
  }
}

export default App;
