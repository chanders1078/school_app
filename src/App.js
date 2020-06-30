import React, { Component } from 'react';
import './App.css';
import {Headertop} from './components/Headertop';
import {Mainnavbar} from './components/Mainnavbar';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import About from './components/About';
import Carouseldiv from './components/Carouseldiv';
import Jombobox from './components/Jumbobox';
import Routes from './components/Routes.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Headertop/>
        <Mainnavbar/>
        <Carouseldiv/>
        <Jombobox/>
      </div>
    );
  }
}

export default App;
