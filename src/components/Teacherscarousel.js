import React, { Component } from 'react';
import './../App.css';

export class Teacherscarousel extends Component {
    render() {
        return (
            <div> 
                <section id="middle-carousel">
                         <div id="teacher-carousel" className="carousel slide" data-ride="carousel" data-interval="5000" data-pause="hover">
                             <div className="carousel-inner">
                               <div className="carousel-item active " > 
                                <img className="teachaers-image" src="images/teacher-image.png" alt="dog-profile"/>
                                  <div className="message ">
                                      <h2>Principle's Message</h2>
                                      <p> School feels elated to enjoy the vested faith of 
                                          generations in its capability to produce the global citizens 
                                           are good humans as well. The school excels in striking equilibrium between 
                                           the modern outlook and traditional values. The school possesses a hand-picked faculty that guides 
                                           the students with a positively authoritarian and democratic approach. Keeping pace with the changing times, the school has a world-class campus that enhances the teaching-learning process...
                                      </p>
                                  </div>
                               </div>
                               <div className="carousel-item " >
                                 <img className="teachaers-image" src="images/teacher-image2.jpeg" alt="lady-profile"/>
                                 <div className="message">
                                    <h2>Vice Principle's Message</h2>
                                    <p> School feels elated to enjoy the vested faith of 
                                        generations in its capability to produce the global citizens 
                                         are good humans as well. The school excels in striking equilibrium between 
                                         the modern outlook and traditional values. The school possesses a hand-picked faculty that guides 
                                         the students with a positively authoritarian and democratic approach. Keeping pace with the changing times, the school has a world-class campus that enhances the teaching-learning process...
                                    </p>
                                    </div>
                                    </div>
                                </div>

                             <a className="carousel-control-prev" href="#teacher-carousel" role="button" data-slide="prev">
                               <span className="carousel-control-prev-icon prev" ></span>
                             </a>
                             <a className="carousel-control-next" href="#teacher-carousel" role="button" data-slide="next">
                               <span className="carousel-control-next-icon prev" ></span>
                             </a>
                         </div>
                </section>
            </div>
        );
    }
}

export default Teacherscarousel;
