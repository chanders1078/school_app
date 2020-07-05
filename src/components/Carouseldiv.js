import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './../App.css';

export class Carouseldiv extends Component {
    render() {
        return (
            <div className="">
                 <div className="Container-fluid bg-dark">
                        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                              <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                              <div className="carousel-item active">
                                <img src="images/slider1.jpg" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                  <h5>First slide label</h5>
                                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </div>
                              </div>
                              <div className="carousel-item">
                                <img src="images/slider2.jpg" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                  <h5>Second slide label</h5>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                              </div>
                              <div className="carousel-item">
                                <img src="images/slider3.jpg" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption">
                                  <h5>Third slide label</h5>
                                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </div>
                              </div>
                            </div>
                            {/* <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="sr-only">Next</span>
                            </a> */}
                        </div>
                 </div>
            </div>
        )
    }
}

export default Carouseldiv;
