import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Headercss.css';
import Jumbobox from './Jumbobox';
export class Carouseldiv extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Carousel interval={4000} keyboard={false} pauseOnHover={true}>
                        <Carousel.Item style={{'height':"100"}}>
                            <img style={{'height':"100"}}
                            className="d-block w-100"
                            src={'images/slider1.jpg'}
                            alt="slider1"/>
                            <Carousel.Caption>
                                <h2>First Slider</h2>
                                <h2>Learning is a treasure that will follow its owner everywhere</h2>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{'height':"100"}}>
                            <img style={{'height':"100"}}
                            className="d-block w-100"
                            src={'images/slider2.jpg'}
                            alt="slider1"/>
                            <Carousel.Caption>
                                <h2>2Nd Slider</h2>
                                <h2>If a man's wit be wandering, let him study the mathematics.</h2>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{'height':"100"}}>
                            <img style={{'height':"100"}}
                            className="d-block w-100"
                            src={'images/slider3.jpg'}
                            alt="slider1"/>
                            <Carousel.Caption>
                                <h2>3Rd Slider</h2>
                                <h2>Best Classrooms</h2>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <Jumbobox/>
            </div>
        )
    }
}

export default Carouseldiv;
export default Carouseldiv
