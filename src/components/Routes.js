import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import About from './About';
import Login from './Login.jsx';
                import App from './../App';
class Routes extends React.Component {
    render(){
        return(
            <Router>
                <Switch>
                <Route path='/about' component={About}/>
                <Route path='/login' component={Login}/>
                <Route path='' component={App}/>
                {/* <Route path="" component={App}/> */}
                </Switch>
            </Router>
        );
    }
}
export default Routes;