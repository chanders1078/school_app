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
                <Jumbotron style={{backgroundImage: "url('/images/bg1.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover",overflow:"hidden"}}>
                    <h1 className="text-center text-white">Vision & Mission</h1>
                    <p className="text-center text-white">Being academically modern implies one to have scientific temper, broader outlook, open, communicative and rational attitude. It means empowering the child to discern the right from the wrong.Being deeply humane makes one sensitive, harmonious, amicable, friendly and sagacious. It means to encourage non-violence in thoughts, words and deeds.
                    </p>
                    <button className="primary-btn read-more">Read More</button>
                </Jumbotron>
            </div>
        );
    }
}

export default Jumbobox;
