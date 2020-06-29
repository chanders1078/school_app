import React, { Component } from 'react';
import './App.css';
import {Headertop} from './components/Headertop';
import {Mainnavbar} from './components/Mainnavbar';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import About from './components/About';
import Carouseldiv from './components/Carouseldiv';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Headertop/>
        <Mainnavbar/>
        <Carouseldiv/>
        <Switch>
          <Route path='/abotus' component={About}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
