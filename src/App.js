import React, { Component } from 'react';
import './App.css';
import {Headertop} from './components/Headertop';
import {Mainnavbar} from './components/Mainnavbar';
import Carouseldiv from './components/Carouseldiv';
import Jombobox from './components/Jumbobox';
import Ourteachers from './components/Ourteachers';
import Teacherscarousel from './components/Teacherscarousel';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Headertop/>
        <Mainnavbar/>
        <Carouseldiv/>
        <Jombobox/>
        <Teacherscarousel/>
        <Ourteachers/>
      </div>
    );
  }
}

export default App;
