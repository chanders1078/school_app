import React, { Component } from 'react';
import './App.css';
import {Headertop} from './components/Headertop';
import {Mainnavbar} from './components/Mainnavbar';
<<<<<<< HEAD
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import About from './components/About';
import Carouseldiv from './components/Carouseldiv';
=======
import Routes from './components/Routes.js';
>>>>>>> c5f4c77964a89d02218cc2ff3bbcb6b50b207366

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headertop/>
        <Mainnavbar/>
<<<<<<< HEAD
        <Carouseldiv/>
        <Switch>
          <Route path='/abotus' component={About}/>
        </Switch>
=======
        <Routes/>
>>>>>>> c5f4c77964a89d02218cc2ff3bbcb6b50b207366
      </div>
    );
  }
}

export default App;
