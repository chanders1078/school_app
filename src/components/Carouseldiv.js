import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Headercss.css';

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
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{'height':"100"}}>
                            <img style={{'height':"100"}}
                            className="d-block w-100"
                            src={'images/slider2.jpg'}
                            alt="slider1"/>
                            <Carousel.Caption>
                                <h2>2Nd Slider</h2>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{'height':"100"}}>
                            <img style={{'height':"100"}}
                            className="d-block w-100"
                            src={'images/slider3.jpg'}
                            alt="slider1"/>
                            <Carousel.Caption>
                                <h2>3Rd Slider</h2>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default Carouseldiv
