import React, { Component } from 'react';
import './App.css';
import {Headertop} from './components/Headertop';
import {Mainnavbar} from './components/Mainnavbar';
import Routes from './components/Routes.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Headertop/>
        <Mainnavbar/>
        <Routes/>
      </div>
    );
  }
}

export default App;
