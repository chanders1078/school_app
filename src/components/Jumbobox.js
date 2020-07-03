import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import './../App.css';

export class Jumbobox extends Component {
    render() {
        const mystyle ={
            color: "black",
            fontFamily:'sans-serif'
        };
        return (
            <div className="jumbobox">
                <Jumbotron style={mystyle}>
                    <h1 className="text-center">Best Class Education</h1>
                    <p className="text-center">A school is a place where the students gain not only an education but also moral values.  School prepares the students for the challenges of career and life.  School provides
                        an excellent opportunity to study as well as socialize and make friends.
                    </p>
                </Jumbotron>
            </div>
        )
    }
}

export default Jumbobox;
