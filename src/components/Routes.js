import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import About from './About';
import Login from './Login.jsx';
class Routes extends React.Component {
    render(){
        return(
            <Router>
                <Switch>
                    {/* <Route path='/' component={Home} /> */}
                <Route path='/about' component={About}/>
                <Route path='/login' component={Login}/>
                </Switch>
            </Router>
        );
    }
}
export default Routes;