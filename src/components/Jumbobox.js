import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import './../App.css';

export class Jumbobox extends Component {
    render() {
        return (
        <div>
            <div className="jumbobox">
                <Jumbotron style={{backgroundImage: "url('/images/bg1.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover",overflow:"hidden"}}>
                    <h1 className="text-center text-white">Best Class Education</h1>
                    <p className="text-center text-white">A school is a place where the students gain not only an education but also moral values.  School prepares the students for the challenges of career and life.  School provides
                        an excellent opportunity to study as well as socialize and make friends.
                    </p>
                </Jumbotron>
            </div>
        </div>    
        )
    }
}

export default Jumbobox;
