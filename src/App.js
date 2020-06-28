import React, { Component } from 'react';
import './App.css';
import {Headertop} from './components/Headertop';
import {Mainnavbar} from './components/Mainnavbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headertop/>
        <Mainnavbar/>
      </div>
    );
  }
}

export default App;
