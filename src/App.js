import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';
import InputCards from './Main/InputCards/InputCards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <InputCards/>
      </div>
    );
  }
}

export default App;
